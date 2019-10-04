import * as sidebarAction from '@action/sidebar.actions';
import { ISidebarState, initialSidebarState } from '@state/sidebar.state';

export function reducerSidebar(state: ISidebarState = initialSidebarState, action: sidebarAction.Actions) {
  switch (action.type) {
    case sidebarAction.ActionTypes.OPEN_SIDEBAR:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
}
