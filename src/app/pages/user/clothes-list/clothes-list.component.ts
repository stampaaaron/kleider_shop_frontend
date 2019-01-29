import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Clothes} from "../../../model/Clothes";
import {Brand} from "../../../model/Brand";

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  private clothes: Clothes[] = [];
  private brands: Brand[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getClothes().subscribe(clothes => {
      this.clothes = clothes;
    });
    this.apiService.getBrands().subscribe(brands => {
      this.brands = brands;
      console.log(brands);
    })
  }

  clothesByBrand(brandId: number) {
    console.log(brandId);
    this.apiService.getClothesByBrandId(brandId).subscribe(clothes => {
      this.clothes = clothes;
    });
  }

  getBrandNames() {
    let brandNames: string[] = this.brands.map(brand => {return brand.brand});
    brandNames.push(' -- All -- ');
    return brandNames
  }


  getBrandIds() {
    let brandIds: number[] =  this.brands.map(brand => {return brand.id});
    brandIds.push(-1);
    return brandIds;
  }
}
