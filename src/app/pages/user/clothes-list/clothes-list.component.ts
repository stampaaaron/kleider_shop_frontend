import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Clothes} from "../../../model/Clothes";

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  private clothes: Clothes[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getClothes().subscribe(clothes => {
      this.clothes = clothes;
      console.log(clothes);
    });
  }

}
