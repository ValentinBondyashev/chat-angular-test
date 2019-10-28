export interface IUserState {
  users?: any;
  error?: string;
}

export const initialUserState: IUserState = {
  users: [],
  error: '',
};
