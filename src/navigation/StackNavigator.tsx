import React from 'react';

// navigation stack
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SplashScreen from '@screens/SplashScreen';
import LoginScreen from '@screens/LoginScreeen';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
