import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../service/api.service";
import {Clothes} from "../../../model/Clothes";

@Component({
  selector: 'app-clothes-detail',
  templateUrl: './clothes-detail.component.html',
  styleUrls: ['./clothes-detail.component.scss']
})
export class ClothesDetailComponent implements OnInit {

  itemId: number;
  item: Clothes;

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.route.params.subscribe(parms => this.itemId = parms.id)
  }

  ngOnInit() {
    this.api.getClothesById(this.itemId).subscribe(clothesItem => {
      this.item = clothesItem;
      console.log(this.item);
    })
  }

}
