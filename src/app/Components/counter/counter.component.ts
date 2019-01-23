import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Output() changeCounter = new EventEmitter();

  @Input() counter = 0;

  @Input() id;

  constructor() { }

  increaseCounter() {
    this.counter++;
    this.changeCounter.emit(this.counter);
  }

  decreaseCounter() {
    if (this.counter > 0) {
      this.counter--;
      this.changeCounter.emit(this.counter);
    }
  }

  onInput(count) {
    if (count > 0) {
      this.counter = count;
      this.changeCounter.emit(this.counter);
    }
  }

  ngOnInit() {
  }

}
