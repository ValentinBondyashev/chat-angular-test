import { Component, OnInit } from '@angular/core';
import { ChatService } from '@service/chat/chat.service';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getMessageState } from '@reducer/index';
import { IAppState } from '@state/index';
import * as messageAction from '@action/message.actions';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages = [];
  id;
  getMessage;

  constructor(private chatService: ChatService, private route: ActivatedRoute, private store: Store<IAppState>) {
    this.getMessage = this.store.pipe(select((getMessageState))).subscribe((data) => {
      this.messages = data.messages;
    });
    route.queryParams.subscribe(
      (queryParam: any) => {
        if (queryParam.id) {
          if (queryParam.id !== this.id) {
            this.chatService.leaveRoom(this.id);
            this.store.dispatch(new messageAction.ChangeChatRoom());
          }
          this.id = queryParam.id;
          this.chatService.joinRoom();
        }
      }
    );
  }

  ngOnInit() {
    this.chatService.receiveChat().subscribe((messages: any) => {
      this.store.dispatch(new messageAction.AddNewMessage({messages}));
    });
  }
}
