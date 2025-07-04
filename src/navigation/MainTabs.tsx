import React from 'react';
import { ConversationScreen, SettingScreen, UserProfile } from '@/screens';
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
            } else if (route.name === 'UserProfile') {
              iconName = 'person-circle-outline';
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#0f2034',
          tabBarInactiveTintColor: 'gray',
        };
      }}
    >
      <Tab.Screen
        name="Conversations"
        options={{
          headerStyle: { backgroundColor: '#fff', shadowOpacity: 0 },
          headerTitle: '',
        }}
        component={ConversationScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{ headerShown: false }}
        component={SettingScreen}
      />
      <Tab.Screen
        name="UserProfile"
        options={{ headerShown: false }}
        component={UserProfile}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
