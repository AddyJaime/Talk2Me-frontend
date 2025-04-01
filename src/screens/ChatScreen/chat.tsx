import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'types';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

  const handleSettings = async () => {
    try {
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsIcon} onPress={handleSettings}>
        <Ionicons name="settings-outline" size={40} color="black" />
      </TouchableOpacity>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

export default ChatScreen;

// brad martinez
// 123456789
// b@gmail.com
