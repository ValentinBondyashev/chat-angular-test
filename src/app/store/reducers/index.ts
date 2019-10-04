import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/';
import { reducerSidebar } from './sidebar.reducers';
import { ISidebarState } from '@state/sidebar.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  sidebar: reducerSidebar,
};

export const getSidebarState = createFeatureSelector<ISidebarState>('sidebar');
