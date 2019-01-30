import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs/index";
import {Clothes} from "../model/Clothes";
import {environment} from "../../environments/environment";
import {OrderItem} from "../model/OrderItem";
import {Brand} from "../model/Brand";
import {ClothesType} from "../model/ClothesType";
import {FilterItem} from "../model/FilterItem";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getClothes(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(`${environment.restURL}/clothes`);
  }

  getClothesByBrandId(brandId: number): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(`${environment.restURL}/clothes?brand_id=${brandId}`);
  }

  getClothesByTypeId(typeId: number): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(`${environment.restURL}/clothes?type_id=${typeId}`);
  }

  getClothesByFilter(filter: FilterItem[]): Observable<Clothes[]> {
    let requestURL: string = `${environment.restURL}/clothes?`;
    filter.forEach(item => {
      requestURL += `${item.urlParameter}=${item.value}&`
    });
    console.log(requestURL);
    return this.http.get<Clothes[]>(requestURL)
  }

  getClothesById(id: number): Observable<Clothes> {
    return this.http.get<Clothes>(`${environment.restURL}/clothes/${id}`);
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.restURL}/brand`);
  }

  getClothesTypes(): Observable<ClothesType[]> {
    return this.http.get<ClothesType[]>(`${environment.restURL}/type`)
  }

  createOrder(orderItem: OrderItem): void {
    console.log(orderItem);
    console.log(`${environment.restURL}/order`);
    this.http.post<OrderItem>(`${environment.restURL}/order`, orderItem).subscribe();
  }


}
