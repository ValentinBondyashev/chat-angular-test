export interface IContactState {
  contacts?: any;
  error?: string;
  gettingAllContacts?: boolean;
  gottenAllContacts?: boolean;
}

export const initialContactState: IContactState = {
  contacts: [],
  error: '',
  gettingAllContacts: false,
  gottenAllContacts: false,
};
