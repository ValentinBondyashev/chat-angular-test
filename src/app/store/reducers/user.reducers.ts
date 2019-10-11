import * as userAction from '@action/user.actions';
import { IUserState, initialUserState } from '@state/user.state';

export function reducerUser(state: IUserState = initialUserState, action: userAction.Actions) {
  switch (action.type) {
    case userAction.ActionTypes.GET_ALL_USERS_REQUEST:
      return {
        ...state,
      };
    case userAction.ActionTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users
      };
    case userAction.ActionTypes.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        error: state.error
      };
    default:
      return state;
  }
}
