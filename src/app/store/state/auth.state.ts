export interface IAuthState {
  token?: string;
  error?: string;
  message?: string;
}

export const initialAuthState: IAuthState = {
  token: '',
  error: '',
  message: ''
};
