import { Component, OnInit } from '@angular/core';
import { ChatService } from '@service/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages = [];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.receiveChat().subscribe(message => {
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
