import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-messages-block',
  templateUrl: './messages-block.component.html',
  styleUrls: ['./messages-block.component.scss']
})
export class MessagesBlockComponent implements OnInit {
  @ViewChild('scrollMe', {static: false}) private myScrollContainer: ElementRef;
  @Input() messages;
  token;
  userId;

  constructor() {
    this.token = localStorage.getItem('token');
    this.userId = jwt_decode(this.token).id;
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    // try {
    //   const element = this.myScrollContainer.nativeElement;
    //   element.scrollIntoView(false);
    // } catch (err) {
    //   console.log(err);
    // }
  }
}
