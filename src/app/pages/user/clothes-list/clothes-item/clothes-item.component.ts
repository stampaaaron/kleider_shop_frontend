import {Component, Input, OnInit} from '@angular/core';
import {Clothes} from "../../../../model/Clothes";
import {ApiService} from "../../../../service/api.service";

@Component({
  selector: 'app-clothes-item',
  templateUrl: './clothes-item.component.html',
  styleUrls: ['./clothes-item.component.scss']
})
export class ClothesItemComponent implements OnInit {

  @Input() item: Clothes;

  constructor() {
  }

  ngOnInit() {
  }

}
