import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Navigation from '@navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
