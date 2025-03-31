import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
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
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}> Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatScreen;

// brad martinez
// 123456789
// b@gmail.com
