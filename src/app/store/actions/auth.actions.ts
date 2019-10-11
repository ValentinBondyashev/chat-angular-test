import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOGIN_REQUEST = '[LOGIN] Login Request User',
  LOGIN_SUCCESS = '[LOGIN] Login Success User',
  LOGIN_FAILURE = '[LOGIN] Login Failed User',
}

export class Login implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;

  constructor(public payload: { username: string, password: string }) {
  }
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { token: string, message: string }) {
  }
}

export class LoginFailure implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;

  constructor(public payload: { error: any }) {
  }
}


export type Actions = Login | LoginSuccess | LoginFailure;
