import React from 'react';
import SearchUserScreen from '@screens/SearchUserScreen/SearchUserScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SearchUsers"
        component={SearchUserScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
