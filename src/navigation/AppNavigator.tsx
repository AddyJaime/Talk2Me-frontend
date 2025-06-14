import React from 'react';
import SearchUserScreen from '@screens/SearchUserScreen/SearchUserScreen';

import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs';
import { ChatsScreen } from '@/screens';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false, title: 'Main' }}
      />

      <Stack.Screen
        name="SearchUsers"
        component={SearchUserScreen}
        options={{
          headerShown: true,
          title: 'Search',
          // headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatsScreen}
        options={{ headerShown: true, title: 'Chat' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
