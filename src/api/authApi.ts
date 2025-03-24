import API from './axios';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await API.post('/auth/login', { email, password });
    const { token, user } = response.data;
    // cuando aqui se retrona solo se retorna solo donde esa funcion serautilizanda
    return { token, user };
  } catch (error: any) {
    console.error('Error login in', error.response?.data || error.message);
    throw error;
  }
};

export const registerUser = async (
  fullName: string,
  email: string,
  password: string,
) => {
  try {
    const response = await API.post('/auth/register', {
      fullName,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    console.log(
      'Error registering user',
      error.response?.data || error.message,
    );
    throw error;
  }
};
