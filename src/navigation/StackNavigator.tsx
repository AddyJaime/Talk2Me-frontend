import React from 'react';

// navigation stack
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SplashScreen from '@screens/SplashScreen/SplashScreen';
import LoginScreen from '@screens/LoginScreen/LoginScreeen';
import SignUpScreen from '@screens/SignUpScreen/SignUpScreen';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
