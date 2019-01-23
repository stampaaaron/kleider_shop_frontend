import { Injectable } from '@angular/core';
import {Clothes} from "../model/Clothes";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public clothesItems: Clothes[] = [];

  constructor() { }

  addItem(item: Clothes) {
    this.clothesItems.push(item);
  }

  removeItem(item: Clothes) {
    this.clothesItems.splice(this.clothesItems.indexOf(item), 1)
  }
}
