import { Injectable } from '@angular/core';
import {Clothes} from "../model/Clothes";
import {OrderItem} from "../model/OrderItem";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public clothesItems: Clothes[] = [];
  public orderItem: OrderItem = {
    clothesOrderItems: [],
    firstName: '',
    lastName: '',
    street: '',
    plz: '',
  } as OrderItem;

  constructor() {
  }

  addItem(item: Clothes) {
    let foundItem: boolean = false;
    this.orderItem.clothesOrderItems.forEach(clothesOrderItem => {
      if (clothesOrderItem.clothes.id === item.id) {
        clothesOrderItem.count++;
        foundItem = true;
      }
    });
    if (!foundItem) {
      this.orderItem.clothesOrderItems.push(
        {
          clothes: item,
          count: 1
        }
      );
    }
    console.log(this.orderItem);
  }

  removeItem(item: Clothes) {
    this.clothesItems.splice(this.clothesItems.indexOf(item), 1)
  }
}
