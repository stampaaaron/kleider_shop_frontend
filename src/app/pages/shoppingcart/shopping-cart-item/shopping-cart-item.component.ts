import {Component, Input, OnInit} from '@angular/core';
import {ClothesOrderItem} from "../../../model/ClothesOrderItem";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item: ClothesOrderItem;

  constructor() { }

  ngOnInit() {
  }

}
