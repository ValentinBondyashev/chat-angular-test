import { Action } from '@ngrx/store';

export enum ActionTypes {
  ADD_NEW_MESSAGE= '[MESSAGE] Add New Message',
  GET_ALL_MESSAGES= '[MESSAGE] Get All Messages',
  CHANGE_CHAT_ROOM= '[MESSAGE] Change Chat Room'
}

export class AddNewMessage implements Action {
  readonly type = ActionTypes.ADD_NEW_MESSAGE;

  constructor(public payload: {messages: any}) {
  }
}

export class GetAllMessages implements Action {
  readonly type = ActionTypes.GET_ALL_MESSAGES;

  constructor(public payload: {messages}) {
  }
}

export class ChangeChatRoom implements Action {
  readonly type = ActionTypes.CHANGE_CHAT_ROOM;
}

export type Actions = AddNewMessage | GetAllMessages | ChangeChatRoom;

