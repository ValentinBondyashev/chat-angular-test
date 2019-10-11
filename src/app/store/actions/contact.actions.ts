import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_ALL_CONTACTS_REQUEST = '[CONTACT] Get All Contacts Request',
  GET_ALL_CONTACTS_SUCCESS = '[CONTACT] Get All Contacts Request Success',
  GET_ALL_CONTACTS_FAILURE = '[CONTACT] Get All Contacts Request Failed',
}

export class GetAllContactsById implements Action {
  readonly type = ActionTypes.GET_ALL_CONTACTS_REQUEST;
}

export class GetAllContactsByIdSuccess implements Action {
  readonly type = ActionTypes.GET_ALL_CONTACTS_SUCCESS;

  constructor(public payload: { contacts: object }) {
  }
}

export class GetAllContactsByIdFailure implements Action {
  readonly type = ActionTypes.GET_ALL_CONTACTS_FAILURE;

  constructor(public payload: { error: any }) {
  }
}

export type Actions = GetAllContactsById | GetAllContactsByIdSuccess | GetAllContactsByIdFailure;
