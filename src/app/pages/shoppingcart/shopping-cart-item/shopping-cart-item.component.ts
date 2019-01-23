import {Component, Input, OnInit} from '@angular/core';
import {Clothes} from "../../../model/Clothes";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item: Clothes;

  constructor() { }

  ngOnInit() {
  }

}
