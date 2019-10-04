import { RouterReducerState } from '@ngrx/router-store';

import { ISidebarState, initialSidebarState } from './sidebar.state';


export interface IAppState {
  router?: RouterReducerState;
  sidebar: ISidebarState;
}

export const initialAppState: IAppState = {
  sidebar: initialSidebarState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
