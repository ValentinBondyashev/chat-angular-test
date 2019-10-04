import { createSelector } from '@ngrx/store';

import { IAppState } from '@state/index';
import { ISidebarState } from '@state/sidebar.state';

const selectSidebar = (state: IAppState) => {
  return state.sidebar;
};

export const selectSidebarOpen = createSelector(
  selectSidebar,
  (state: ISidebarState) =>  state.open
);
