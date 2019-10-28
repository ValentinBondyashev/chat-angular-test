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

  sendMessage(message) {
    const date = Date.now();
    this.chatService.sendMessage({text: this.itemName, date});
    this.itemName = '';
  }


  onFocus() {
    this.ifFocus = false;
  }

  focus() {
    this.ifFocus = true;
  }

}
