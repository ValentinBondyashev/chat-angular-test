import * as contactAction from '@action/contact.actions';
import { IContactState, initialContactState } from '@state/contact.state';

export function reducerContact(state: IContactState = initialContactState, action: contactAction.Actions) {
  switch (action.type) {
    case contactAction.ActionTypes.GET_ALL_CONTACTS_REQUEST:
      return {
        ...state,
        gettingAllContacts: true,
        gottenAllContacts: false,
      };
    case contactAction.ActionTypes.GET_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload.contacts,
        gettingAllContacts: false,
        gottenAllContacts: true,
      };
    case contactAction.ActionTypes.GET_ALL_CONTACTS_FAILURE:
      return {
        ...state,
        error: state.error,
        gettingAllContacts: false,
        gottenAllContacts: false,
      };
    case contactAction.ActionTypes.ADD_CONTACTS_REQUEST:
      return {
        ...state,
      };
    case contactAction.ActionTypes.ADD_CONTACTS_SUCCESS:
      return {
        ...state,
      };
    case contactAction.ActionTypes.ADD_CONTACTS_FAILURE:
      return {
        ...state,
        error: state.error,
      };
    default:
      return state;
  }
}
