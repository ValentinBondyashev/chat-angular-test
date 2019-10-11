import * as authAction from '@action/auth.actions';
import { IAuthState, initialAuthState } from '@state/auth.state';

export function reducerAuth(state: IAuthState = initialAuthState, action: authAction.Actions) {
  switch (action.type) {
    case authAction.ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        token: state.token
      };
    case authAction.ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: state.token,
        message: state.message
      };
    case authAction.ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: state.error
      };
    default:
      return state;
  }
}
