import { Component, OnInit } from '@angular/core';
import * as chatAction from '@action/chat.actions';
import { getChatState } from '@reducer/index';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@state/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  private chatState;
  chats = [];

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new chatAction.GetAllChatsRequest());
    this.chatState = this.store.pipe(select((getChatState))).subscribe((data) => {
      this.chats = data.chats;
    });
  }

}
