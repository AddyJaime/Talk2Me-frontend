import React from 'react';
// import { View } from 'react-native';

// navigation stack
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '@screens/SplashScreen';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
