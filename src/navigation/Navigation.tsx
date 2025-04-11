import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import { RootState } from 'redux/store';
import AppNavigator from './AppNavigator';

const Navigation = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;
