import { KeyboardTypeOptions } from 'react-native';

export type LoginForm = {
  email: string;
  password: string;
};

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  Chat: undefined;
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
}