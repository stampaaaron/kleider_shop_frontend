import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../../service/shopping-cart.service";
import {ApiService} from "../../../service/api.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private api: ApiService) { }

  ngOnInit() {
  }

  submitOrder() {
    this.api.createOrder(this.shoppingCartService.orderItem);
  }
}
