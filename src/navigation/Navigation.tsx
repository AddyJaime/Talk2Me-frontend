import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import { AppDispatch, RootState } from 'redux/store';
import AppNavigator from './AppNavigator';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAsyncStorage } from '@hooks';
import { SplashScreen } from '@/screens';
import { setUser } from '@/redux/users/usersSlice';
import { login } from '@/redux/auth/authSlice';

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
        const authData = await getItem('authToken');

        console.log(authData);

        if (authData?.token && authData?.user) {
          dispatch(setUser(authData.user));
          dispatch(login(authData.user));
        }
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
