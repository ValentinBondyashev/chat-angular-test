import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as chatAction from '@action/chat.actions';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ChatService } from '@service/chat';

interface IAction {
  type: string;
  payload?: any;
}

@Injectable()
export class ChatEffect {

  constructor(private actions$: Actions,
              private http: ChatService) {
  }

  @Effect()
  getAllChats$: Observable<Action> = this.actions$.pipe(
    ofType(chatAction.ActionTypes.GET_ALL_CHATS_REQUEST),
    switchMap(() => {
      return this.http.getAllChats()
        .pipe(
          map((chats) => {
            return new chatAction.GetAllChatsSuccess({chats});
          }),
          catchError(error =>
            observableOf(new chatAction.GetAllChatsFailure({error}))
          )
        );
    })
  );

  @Effect()
  addNewChat$: Observable<Action> = this.actions$.pipe(
    ofType(chatAction.ActionTypes.ADD_NEW_CHAT_REQUEST),
    switchMap((payload) => {
      return this.http.addNewChat(payload)
        .pipe(
          map((data) => {
            return new chatAction.AddNewChatSuccess({message: data});
          }),
          catchError(error =>
            observableOf(new chatAction.AddNewChatFailure({error}))
          )
        );
    })
  );

  @Effect()
  getChat$: Observable<Action> = this.actions$.pipe(
    ofType(chatAction.ActionTypes.GET_CHAT_REQUEST),
    switchMap((action: IAction) => {
      return this.http.getChat(action.payload.id)
        .pipe(
          map((chat) => {
            return new chatAction.GetChatSuccess({chat});
          }),
          catchError(error =>
            observableOf(new chatAction.GetChatFailure({error}))
          )
        );
    })
  );
}
