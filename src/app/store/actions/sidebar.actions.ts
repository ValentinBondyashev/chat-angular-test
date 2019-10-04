import { Action } from '@ngrx/store';

export enum ActionTypes {
  OPEN_SIDEBAR = '[SIDEBAR] Open Sidebar'
}

export class OpenSidebar implements Action {
  readonly type = ActionTypes.OPEN_SIDEBAR;
}


export type Actions = OpenSidebar;
