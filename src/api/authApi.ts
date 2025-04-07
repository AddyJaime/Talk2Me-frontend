import API from './axios';
import { LoginForm } from '../types';

export const loginUser = async (data: LoginForm) => {
  try {
    const response = await API.post('/auth/login', {
      email: data.email,
      password: data.password,
    });
    const { token, user } = response.data;
    console.log(user)
    return { token, user };
  } catch (error: any) {
    console.error('Error login in', error.response?.data || error.message);
    throw error;
  }
};

type RegisterForm = {
  fullName: string;
  email: string;
  password: string;
};

export const registerUser = async (formValues: RegisterForm) => {
  try {
    const axiosResponse = await API.post('/auth/register', {
      fullName: formValues.fullName,
      email: formValues.email,
      password: formValues.password,
    });
    const backendData = axiosResponse.data;
    return backendData;
  } catch (error: any) {
    console.log(
      'Error registering user',
      error.response?.data || error.message,
    );
    throw error;
  }
};
