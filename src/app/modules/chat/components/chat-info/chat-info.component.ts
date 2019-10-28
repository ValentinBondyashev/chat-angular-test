import { Component, OnInit } from '@angular/core';
import * as sidebarAction from '../../../../store/actions/sidebar.actions';
import { IAppState } from '@store/state';
import { select, Store } from '@ngrx/store';
import * as chatAction from '@action/chat.actions';
import { ActivatedRoute } from '@angular/router';
import { getChatState } from '@reducer/index';

@Component({
  selector: 'app-user-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.scss']
})
export class ChatInfoComponent implements OnInit {
  id;
  chatState;
  chat;

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {
    route.queryParams.subscribe(
      (queryParam: any) => {
        if (queryParam.id) {
          if (queryParam.id !== this.id) {
            this.store.dispatch(new chatAction.GetChatRequest({id: queryParam.id}));
          }
          this.id = queryParam.id;
        }
      }
    );
  }

  ngOnInit() {
    this.chatState = this.store.pipe(select((getChatState))).subscribe((data) => {
      this.chat = data.chat;
    });
  }

  openSidebar() {
    this.store.dispatch(new sidebarAction.OpenSidebar());
  }

}
