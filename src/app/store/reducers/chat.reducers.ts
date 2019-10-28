import * as chatAction from '@action/chat.actions';
import { IChatState, initialChatState } from '@state/chat.state';

export function reducerChat(state: IChatState = initialChatState, action: chatAction.Actions) {
  switch (action.type) {
    case chatAction.ActionTypes.GET_ALL_CHATS_REQUEST:
      return {
        ...state,
      };
    case chatAction.ActionTypes.GET_ALL_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.payload.chats
      };
    case chatAction.ActionTypes.GET_ALL_CHATS_FAILURE:
      return {
        ...state,
        error: state.error
      };
    case chatAction.ActionTypes.ADD_NEW_CHAT_REQUEST:
      return {
        ...state,
      };
    case chatAction.ActionTypes.ADD_NEW_CHAT_SUCCESS:
      return {
        ...state,
        message: action.payload.message
      };
    case chatAction.ActionTypes.ADD_NEW_CHAT_FAILURE:
      return {
        ...state,
        error: state.error
      };
    case chatAction.ActionTypes.GET_CHAT_REQUEST:
      return {
        ...state,
      };
    case chatAction.ActionTypes.GET_CHAT_SUCCESS:
      return {
        ...state,
        chat: action.payload.chat
      };
    case chatAction.ActionTypes.GET_CHAT_FAILURE:
      return {
        ...state,
        error: state.error
      };
    default:
      return state;
  }
}
