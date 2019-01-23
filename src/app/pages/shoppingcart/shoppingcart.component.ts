import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../service/shopping-cart.service";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

}
