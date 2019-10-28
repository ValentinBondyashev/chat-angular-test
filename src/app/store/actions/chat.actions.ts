import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_ALL_CHATS_REQUEST = '[CHAT] Get All Chats Request',
  GET_ALL_CHATS_SUCCESS = '[CHAT] Get All Chats Request Success',
  GET_ALL_CHATS_FAILURE = '[CHAT] Get All Chats Request Failed',
  ADD_NEW_CHAT_REQUEST = '[CHAT] Add New Chat Request',
  ADD_NEW_CHAT_SUCCESS = '[CHAT] Add New Chat Request Success',
  ADD_NEW_CHAT_FAILURE = '[CHAT] Add New Chat Request Failed',
  GET_CHAT_REQUEST = '[CHAT] Get Chat Request',
  GET_CHAT_SUCCESS = '[CHAT] Get Chat Request Success',
  GET_CHAT_FAILURE = '[CHAT] Get Chat Request Failed',
}

export class GetAllChatsRequest implements Action {
  readonly type = ActionTypes.GET_ALL_CHATS_REQUEST;
}

export class GetAllChatsSuccess implements Action {
  readonly type = ActionTypes.GET_ALL_CHATS_SUCCESS;

  constructor(public payload: { chats: object }) {
  }
}

export class GetAllChatsFailure implements Action {
  readonly type = ActionTypes.GET_ALL_CHATS_FAILURE;

  constructor(public payload: { error: any }) {
  }
}

export class AddNewChatRequest implements Action {
  readonly type = ActionTypes.ADD_NEW_CHAT_REQUEST;

  constructor(public payload: { name: string, users: Array<any> }) {
  }
}

export class AddNewChatSuccess implements Action {
  readonly type = ActionTypes.ADD_NEW_CHAT_SUCCESS;

  constructor(public payload: { message: any }) {
  }
}

export class AddNewChatFailure implements Action {
  readonly type = ActionTypes.ADD_NEW_CHAT_FAILURE;

  constructor(public payload: { error: any }) {
  }
}

export class GetChatRequest implements Action {
  readonly type = ActionTypes.GET_CHAT_REQUEST;

  constructor(public payload: { id: string }) {
  }
}

export class GetChatSuccess implements Action {
  readonly type = ActionTypes.GET_CHAT_SUCCESS;

  constructor(public payload: { chat: object }) {
  }
}

export class GetChatFailure implements Action {
  readonly type = ActionTypes.GET_CHAT_FAILURE;

  constructor(public payload: { error: any }) {
  }
}


export type Actions = GetAllChatsRequest |
  GetAllChatsSuccess |
  GetAllChatsFailure |
  AddNewChatRequest |
  AddNewChatSuccess |
  AddNewChatFailure |
  GetChatRequest |
  GetChatSuccess |
  GetChatFailure;

