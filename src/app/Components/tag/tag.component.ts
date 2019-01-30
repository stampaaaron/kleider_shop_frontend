import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterItem} from "../../model/FilterItem";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Output() remove = new EventEmitter();
  @Input() filterItem: FilterItem;

  constructor() { }

  ngOnInit() {
  }

  removeTag() {
    this.remove.emit(this.filterItem);
  }

}
