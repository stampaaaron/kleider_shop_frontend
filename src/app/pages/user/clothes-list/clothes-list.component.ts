import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Clothes} from "../../../model/Clothes";
import {Brand} from "../../../model/Brand";
import {ClothesType} from "../../../model/ClothesType";
import {FilterItem} from "../../../model/FilterItem";

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  private clothes: Clothes[] = [];
  private brands: Brand[] = [];
  private clothesTypes: ClothesType[] = [];

  private _filter: FilterItem[] = [];

  get filter() {
    return this._filter;
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getClothesByFilter(this.filter).subscribe(clothes => {
      this.clothes = clothes;
    })
    this.apiService.getBrands().subscribe(brands => {
      this.brands = brands;
    });
    this.apiService.getClothesTypes().subscribe(clothesTypes => {
      this.clothesTypes = clothesTypes;
    });
  }

  applyFilter() {
    this.apiService.getClothesByFilter(this.filter).subscribe(clothes => {
      this.clothes = clothes;
    });
  }

  clothesByBrand(brand: object) {
    let index: number = this.filter.findIndex(filterItem => filterItem.urlParameter === 'brand_id');
    if (index != -1) {
      this.filter.splice(index, 1);
    }
    this.filter.push({
      name: brand.value,
      value: brand.key,
      urlParameter: 'brand_id'
    } as FilterItem);
    this.applyFilter();
  }

  clothesByType(type: object) {
    let index: number = this.filter.findIndex(filterItem => filterItem.urlParameter === 'type_id');
    if (index != -1) {
      this.filter.splice(index, 1);
    }
    this.filter.push({
      name: type.value,
      value: type.key,
      urlParameter: 'type_id'
    } as FilterItem);
    this.applyFilter();
  }

  getBrandNames() {
    return this.brands.map(brand => {return brand.brand});
  }
  getBrandIds() {
    return this.brands.map(brand => {return brand.id});
  }

  getTypeNames() {
    return this.clothesTypes.map(clothesType => {return clothesType.type});
  }
  getTypeIds() {
    return this.clothesTypes.map(clothesType => {return clothesType.id});
  }

  removeFilter(filterItem: FilterItem) {
    this.filter.splice(this.filter.findIndex(tag => tag === filterItem), 1);
    this.applyFilter();
  }

}
