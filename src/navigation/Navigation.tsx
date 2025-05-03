import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import { AppDispatch, RootState } from 'redux/store';
import AppNavigator from './AppNavigator';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAsyncStorage } from '@hooks';
import { login } from 'redux/auth/authSlice';
import SplashScreen from '@screens/SplashScreen/SplashScreen';

const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { getItem } = useAsyncStorage();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const [loading, setLoading] = useState(true);
  // usefecct es una funcion que se utiliza para cuando un componente se actualice, o se monte
  // “React no quiere que useEffect sea async directamente porque eso rompe el ciclo de vida del componente”.
  useEffect(() => {
    // async y await significa que una funcion va a trabajr con tareas de necesitan
    const checkAuth = async () => {
      try {
        // de aqui no se puede destruturar  el token y user porque getitem devuelve un string solamente
        // aqui es mejor no hacerr destructing porque mucha veced nos puede mandar null si no hay nada en el asyn por esa razon es mejor hacerlo asi y asegurase de que si existe y si no sigue para setloading
        const authData = await getItem('authToken');
        if (authData?.token && authData?.user) {
          dispatch(login({ id: authData.id, email: authData.email }));
        }
        // await  espera a que esta tarea termia para continuar
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
    // este [] significa solo una sola vez
  }, []);
  if (loading) {
    return <SplashScreen />;
  }

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;
