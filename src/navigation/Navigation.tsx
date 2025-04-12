import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import { AppDispatch, RootState } from 'redux/store';
import AppNavigator from './AppNavigator';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAsyncStorage } from '@hooks';
import { login } from 'redux/auth/authSlice';
import SplashScreen from '@screens/SplashScreen/SplashScreen';
import { resolve } from 'metro-resolver';

const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { getItem } = useAsyncStorage();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // de aqui no se puede destruturar  el token y user porque getitem devuelve un string solamente
        const authData = await getItem('authToken');
        if (authData?.token && authData?.user) {
          dispatch(login({ id: authData.id, email: authData.email }));
        }
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);
  if (loading) {
    return <SplashScreen />;
  }

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;
