import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'types';

const ChatScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.log('Error to log out', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>Cerrar Sesión</TouchableOpacity>
    </View>
  );
};

export default ChatScreen;
