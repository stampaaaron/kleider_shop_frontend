import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../../service/shopping-cart.service";
import {ApiService} from "../../../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  submitOrder() {
    this.api.createOrder(this.shoppingCartService.orderItem);
    this.shoppingCartService.clear();
    this.router.navigate(['/confirmation']);
  }
}
