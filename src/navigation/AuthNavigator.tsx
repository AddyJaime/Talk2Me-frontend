import LoginScreen from '@screens/LoginScreen/LoginScreeen';
import SignUpScreen from '@screens/SignUpScreen/SignUpScreen';
import SplashScreen from '@screens/SplashScreen/SplashScreen';

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();
// flujo de no autenticaco
const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
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

export default AuthNavigator;
