import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_ALL_USERS_REQUEST = '[USER] Get All Users Request',
  GET_ALL_USERS_SUCCESS = '[USER] Get All Users Request Success',
  GET_ALL_USERS_FAILURE = '[USER] Get All Users Request Failed',
  GET_USERS_WITH_FILTER_REQUEST = '[USER] Get Users With Filter Request',
  GET_USERS_WITH_FILTER_SUCCESS = '[USER] Get Users With Filter Request Success',
  GET_USERS_WITH_FILTER_FAILURE = '[USER] Get Users With Filter Request Failed',
}

export class GetAllUsersRequest implements Action {
  readonly type = ActionTypes.GET_ALL_USERS_REQUEST;
}

export class GetAllUsersSuccess implements Action {
  readonly type = ActionTypes.GET_ALL_USERS_SUCCESS;

  constructor(public payload: { users: object }) {
  }
}

export class GetAllUserFailure implements Action {
  readonly type = ActionTypes.GET_ALL_USERS_FAILURE;

  constructor(public payload: { error: any }) {
  }
}

export class GetUsersWithFilterRequest implements Action {
  readonly type = ActionTypes.GET_USERS_WITH_FILTER_REQUEST;

  constructor(public payload: { filter: string }) {
  }
}

export class GetUsersWithFilterSuccess implements Action {
  readonly type = ActionTypes.GET_USERS_WITH_FILTER_SUCCESS;

  constructor(public payload: { users: object }) {
  }
}

export class GetAllUserWithFilterFailure implements Action {
  readonly type = ActionTypes.GET_USERS_WITH_FILTER_FAILURE;

  constructor(public payload: { error: any }) {
  }
}

export type Actions = GetAllUsersRequest |
  GetAllUsersSuccess |
  GetAllUserFailure |
  GetUsersWithFilterRequest |
  GetUsersWithFilterSuccess |
  GetAllUserWithFilterFailure;

