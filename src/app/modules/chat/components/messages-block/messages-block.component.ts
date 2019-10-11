import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-block',
  templateUrl: './messages-block.component.html',
  styleUrls: ['./messages-block.component.scss']
})
export class MessagesBlockComponent implements OnInit {
  @Input() messages;
  // messages = [{text: 'Hello', user: {first_name: 'Vlad', avatar: ''}, created_at: '3:05 PM'},
  //
  //   {text: 'Im okey. What about you?', user: {first_name: 'Vlad', avatar: ''}, created_at: '3:06 PM'},
  //   {text: 'What are you doing?', user: {first_name: 'Vlad', avatar: ''}, created_at: '3:07 PM'}];

  constructor() {
  }

  ngOnInit() {
  }

}
