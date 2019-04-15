import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mf-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _message = '';
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set message(message: string) {
    this._message = message;

  }
  get message(): string { return this._message; }
}
