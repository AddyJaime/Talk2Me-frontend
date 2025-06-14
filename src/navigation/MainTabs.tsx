import React from 'react';
import { ConversationScreen, SettingScreen, StatusScreen } from '@/screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={(props) => {
        const route = props.route;
        return {
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Conversations') {
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
        name="Conversations"
        options={{ headerShown: false, title: 'Conversations' }}
        component={ConversationScreen}
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

export default MainTabs;
