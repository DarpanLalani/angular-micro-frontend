import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mf-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor() { }
  sendMsgTxt = '';
  ngOnInit() {
  }

  sendMessage() {
    console.log(this.sendMsgTxt);
    const receiverele = document.querySelector('mf2-receiver');
    if (receiverele != null) {
      // tslint:disable-next-line:no-string-literal
      receiverele['message'] = this.sendMsgTxt;
    }
  }
}
