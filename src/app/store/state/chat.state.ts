export interface IChatState {
  chats?: any;
  chat?: any;
  message?: any;
  error?: any;
}

export const initialChatState: IChatState = {
  chats: [],
  chat: null,
  message: '',
  error: '',
};
