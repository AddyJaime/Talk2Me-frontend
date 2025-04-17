import ChatScreen from '@screens/ChatScreen/chat';
import SettingScreen from '@screens/SettingScreen/SettingScreen';
import StatusScreen from '@screens/StatusScreen/StatusScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// tab es el contenedor de mis tabs
const AppNavigator: React.FC = () => {
  return (
    // screenOption es una propiedad de navagator la cual recibe una funcion porque se le pasa una funcion
    // porque una funcion se utiliza para reutilizar codigo y hacer que algo haga algo, le dices haz esto y lo hace entonces como queremos hacer difreentes cosas en tab por eso recibe una funcion
    // se escribe asi () => ({}) poruqe esta funcion devuleve un objecto el cual es route\
    // Los paréntesis le dicen a JavaScript:
    // “Esto no es un bloque de código... ¡es un objeto que quiero devolver!
    <Tab.Navigator
      // react naviagtion te da route y navigation y esso viene en un objecto
      // esta forma que acabo de escribr es na maera de hacerlo pero si quiere puedo pasasr dierefectmanete el route como un obkect retorna el objecto a traves de la funcion
      screenOptions={(props) => {
        const route = props.route;
        // este arrow funcion devuelve este objecto que voy a escribir ahora todo lo que esta dentro de ese objecto como iconname y todo eso es un objecto
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
      // las funciones en javascfr son valores por esa razon puedes guardar funciones dentro de obejctos
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
