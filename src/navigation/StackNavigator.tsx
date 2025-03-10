import React from 'react';

// navigation stack
import { createStackNavigator } from '@react-navigation/stack';

// Screens
// import SplashScreen from '@screens/SplashScreen';
import LoginScreen from '@screens/LoginScreen/LoginScreeen';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
