import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checked: boolean = false;
  @Input() label: string;

  constructor() {
  }

  ngOnInit() {
    console.log('load');
  }

}
