import ChatScreen from '@screens/ChatScreen/chat';
import SettingScreen from '@screens/SettingScreen/SettingScreen';
import StatusScreen from '@screens/StatusScreen/statusScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chat"
        options={{ headerShown: false }}
        component={ChatScreen}
      />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
