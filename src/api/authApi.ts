import API from './axios';
import { LoginForm } from '../types';

export const loginUser = async (data: LoginForm) => {
  try {
    const response = await API.post('/auth/login', {
      email: data.email,
      password: data.password,
    });
    const { token, user } = response.data;
    // cuando aqui se retrona solo se retorna solo donde esa funcion serautilizanda
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

// aqui hay que indicarle a typscript que tipo de datos son por esa razon se le especific wue tipo de datos son
export const registerUser = async (formValues: RegisterForm) => {
  try {
    // aqui axios necesita recibir el cuerpo del req (body) como un objecto json no solo como una variable, pero si los datos ya estan listo se pueden enviar como formvalues y listo
    const axiosResponse = await API.post('/auth/register', {
      fullName: formValues.fullName,
      email: formValues.email,
      password: formValues.password,
    });
    const backendData = axiosResponse.data;
    // replyData se vuelve serverReply en la funcion que lo llamo que es onsubmit
    return backendData;
  } catch (error: any) {
    console.log(
      'Error registering user',
      error.response?.data || error.message,
    );
    throw error;
  }
};
