import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_ALL_USERS_REQUEST = '[USER] Get All Users Request',
  GET_ALL_USERS_SUCCESS = '[USER] Get All Users Request Success',
  GET_ALL_USERS_FAILURE = '[USER] Get All Users Request Failed',
}

export class GetAllUsersRequest implements Action {
  readonly type = ActionTypes.GET_ALL_USERS_REQUEST;
}

export class GetAllUsersSuccess implements Action {
  readonly type = ActionTypes.GET_ALL_USERS_SUCCESS;

  constructor(public payload: {users: object}) {
  }
}

export class GetAllUserFailure implements Action {
  readonly type = ActionTypes.GET_ALL_USERS_FAILURE;

  constructor(public payload: {error: any}) {
  }
}

export type Actions = GetAllUsersRequest | GetAllUsersSuccess | GetAllUserFailure;

