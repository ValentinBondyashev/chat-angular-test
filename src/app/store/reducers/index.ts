import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { reducerSidebar } from './sidebar.reducers';
import { reducerAuth } from '@reducer/auth.reducers';
import { reducerContact } from '@reducer/contact.reducers';
import { reducerUser } from '@reducer/user.reducers';
import { reducerChat } from '@reducer/chat.reducers';

import { IAppState } from '../state/';
import { ISidebarState } from '@state/sidebar.state';
import { IContactState } from '@state/contact.state';
import { IUserState } from '@state/user.state';
import { IChatState } from '@state/chat.state';
import { reducerMessage } from '@reducer/message.reducers';
import { IMessageState } from '@state/message.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  sidebar: reducerSidebar,
  auth: reducerAuth,
  contact: reducerContact,
  user: reducerUser,
  chat: reducerChat,
  message: reducerMessage
};

export const getSidebarState = createFeatureSelector<ISidebarState>('sidebar');
export const getContactState = createFeatureSelector<IContactState>('contact');
export const getUserState = createFeatureSelector<IUserState>('user');
export const getChatState = createFeatureSelector<IChatState>('chat');
export const getMessageState = createFeatureSelector<IMessageState>('message');
