import {Component, Input, OnInit} from '@angular/core';
import {OrderItem} from "../../../../model/OrderItem";
import * as moment from 'moment';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() orderItem: OrderItem;

  moment = moment();

  constructor() { }

  formatDate(date: Date) {
    return moment(date).format('DD. MM. YYYY')
  }

  countItems() {
    let count: number = 0;
    this.orderItem.clothesOrderItems.forEach(item => {
      count += item.count;
    })
    return count;
  }

  ngOnInit() {
  }

}
