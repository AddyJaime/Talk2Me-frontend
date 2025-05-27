import ChatScreen from '@screens/ChatScreen/chat';
import SettingScreen from '@screens/SettingScreen/SettingScreen';
import StatusScreen from '@screens/StatusScreen/StatusScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={(props) => {
        const route = props.route;
        return {
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Chat') {
              iconName = 'chatbubbles-outline';
            } else if (route.name === 'Setting') {
              iconName = 'time-outline';
            } else if (route.name === 'Status') {
              iconName = 'settings-outline';
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
        };
      }}
    >
      <Tab.Screen
        name="Chat"
        options={{ headerShown: false }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{ headerShown: false }}
        component={SettingScreen}
      />
      <Tab.Screen
        name="Status"
        options={{ headerShown: false }}
        component={StatusScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
