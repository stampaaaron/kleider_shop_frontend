import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from "rxjs/index";
import {Clothes} from "../model/Clothes";
import {environment} from "../../environments/environment";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getClothes(): Observable<Clothes[]> {
    console.log(this.http.get(`${environment.restURL}/clothes`));
    return this.http.get<Clothes[]>(`${environment.restURL}/clothes`);
  }

  getClothesById(id: number): Observable<Clothes> {
    console.log(this.http.get<Clothes>(`${environment.restURL}/clothes/${id}`));
    return this.http.get<Clothes>(`${environment.restURL}/clothes/${id}`);
  }

}
