import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-select',
  templateUrl: './multiple-choice-select.component.html',
  styleUrls: ['./multiple-choice-select.component.scss']
})
export class MultipleChoiceSelectComponent implements OnInit {

  @Input() values: string[];
  @Input() keys: number[];

  @Output() optionSelect = new EventEmitter();

  open: boolean;

  constructor() { }

  ngOnInit() {
    this.open = false;
  }

  get options() {
    let optionList: object[] = [];
    for (let i = 0; i < this.values.length; i++) {
      optionList.push({
        value: this.values[i],
        key: this.keys[i]
      })
    }
    return optionList;
  }

  selectOption(option: object) {
    // console.log("option " + option.value + " selected");
    this.optionSelect.emit(option);
  }

}
