import * as messageAction from '@action/message.actions';
import { IMessageState, initialMessageState } from '@state/message.state';

export function reducerMessage(state: IMessageState = initialMessageState, action: messageAction.Actions) {
  switch (action.type) {
    case messageAction.ActionTypes.CHANGE_CHAT_ROOM:
      return {
        ...state,
        messages: []
      };
    case messageAction.ActionTypes.ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages]
      };
    case messageAction.ActionTypes.GET_ALL_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages
      };
    default:
      return state;
  }
}
