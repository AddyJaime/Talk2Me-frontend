import { KeyboardTypeOptions } from 'react-native';


export type LoginForm = {
  email: string;
  password: string;
};

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  Conversations: undefined; // TODO" change to Conversations and finish view to that screen, add index to every screen.
  Chat: undefined; // TODO: change to Chats

  SearchUsers: undefined

};

export type ClearableInputProps = {
  value: string;
  // void signifca que la funcion no devuelve ningun valor, cuando escribo algo en los inputs la funcion se activa y aqui el string viene siendo lo que escribes
  onChangeText: (text: string) => void;
  placeholder: string;
  placeholderTextColor: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

export type useAsyncStorageType = {
  deleteItem: Function
  getItem: Function
  setItem: Function

}

export type Message = {
  // id aqui es opcional porque la base de dato lo crea solo
  id?: number
  text: string,
  senderId: number,
  receiverId: number,
  conversationId: number
  createdAt: string
  updatedAt: string



}

export type participant = {
  id: number,
  fullName: string,
  email: string
}

export type Conversation = {
  id: number;
  senderId: number;
  receiverId: number;
  createdAt: string;
  updatedAt: string;
  participant: participant;
  messages: Message[];
  online: string,
  unreadCount: number,




}

export type Chat = {
  id: string,
  fullName: string,
  email: string
  online: boolean,
  message: string[],
  unreadCount: number
}
export type User = {
  id: number | null,
  fullName: string
}
