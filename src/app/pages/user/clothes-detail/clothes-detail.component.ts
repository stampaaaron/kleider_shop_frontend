import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../service/api.service";
import {Clothes} from "../../../model/Clothes";
import {ShoppingCartService} from "../../../service/shopping-cart.service";

@Component({
  selector: 'app-clothes-detail',
  templateUrl: './clothes-detail.component.html',
  styleUrls: ['./clothes-detail.component.scss']
})
export class ClothesDetailComponent implements OnInit {

  itemId: number;
  item: Clothes;

  constructor(private route: ActivatedRoute, private api: ApiService, public shoppingCartService: ShoppingCartService) {
    this.route.params.subscribe(parms => this.itemId = parms.id)
  }

  ngOnInit() {
    this.api.getClothesById(this.itemId).subscribe(clothesItem => {
      this.item = clothesItem;
    })
  }

}
