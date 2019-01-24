import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from "rxjs/index";
import {Clothes} from "../model/Clothes";
import {environment} from "../../environments/environment";
import {OrderItem} from "../model/OrderItem";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getClothes(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(`${environment.restURL}/clothes`);
  }

  getClothesById(id: number): Observable<Clothes> {
    return this.http.get<Clothes>(`${environment.restURL}/clothes/${id}`);
  }

  createOrder(orderItem: OrderItem): void {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // };
    console.log(orderItem);
    console.log(`${environment.restURL}/order`);
    this.http.post<OrderItem>(`${environment.restURL}/order`, orderItem).subscribe();
  }

}
