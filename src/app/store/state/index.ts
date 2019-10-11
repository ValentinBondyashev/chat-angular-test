import { RouterReducerState } from '@ngrx/router-store';

import { ISidebarState, initialSidebarState } from './sidebar.state';
import { IAuthState, initialAuthState } from '@state/auth.state';
import { IContactState, initialContactState } from '@state/contact.state';
import { initialUserState, IUserState } from '@state/user.state';


export interface IAppState {
  router?: RouterReducerState;
  sidebar: ISidebarState;
  auth: IAuthState;
  contact: IContactState;
  user: IUserState;
}

export const initialAppState: IAppState = {
  sidebar: initialSidebarState,
  auth: initialAuthState,
  contact: initialContactState,
  user: initialUserState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
