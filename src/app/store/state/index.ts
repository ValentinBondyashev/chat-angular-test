import { RouterReducerState } from '@ngrx/router-store';

import { ISidebarState, initialSidebarState } from './sidebar.state';
import { IAuthState, initialAuthState } from '@state/auth.state';
import { IContactState, initialContactState } from '@state/contact.state';
import { initialUserState, IUserState } from '@state/user.state';
import { IChatState, initialChatState } from '@state/chat.state';
import { IMessageState, initialMessageState } from '@state/message.state';


export interface IAppState {
  router?: RouterReducerState;
  sidebar: ISidebarState;
  auth: IAuthState;
  contact: IContactState;
  user: IUserState;
  chat: IChatState;
  message: IMessageState;
}

export const initialAppState: IAppState = {
  sidebar: initialSidebarState,
  auth: initialAuthState,
  contact: initialContactState,
  user: initialUserState,
  chat: initialChatState,
  message: initialMessageState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
