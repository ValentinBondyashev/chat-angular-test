import { Component, OnInit } from '@angular/core';
import { ChatService } from '@service/chat/chat.service';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.scss']
})
export class InputBlockComponent implements OnInit {
  itemName;
  ifFocus = false;
  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
  }

  sendMessage() {
    this.chatService.sendChat({text: this.itemName, user: {first_name: 'Vlad', avatar: ''}, created_at: '3:05 PM'});
    this.itemName = '';
  }

  onFocus() {
    this.ifFocus = false;
  }

  focus() {
    this.ifFocus = true;
  }

}
