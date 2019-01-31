import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {OrderItem} from "../../../model/OrderItem";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  orderItems: OrderItem[] = [];

  ngOnInit() {
    this.apiService.getOrders().subscribe(orderItems => {
      this.orderItems = orderItems;
    })
  }

}
