import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from 'types';
import { useAsyncStorage } from '@hooks';

import { logout } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { RootState } from 'redux/store';

const ChatScreen: React.FC = () => {
  const { deleteItem } = useAsyncStorage();
  const dispatch = useDispatch();

  // probando que el estadpo cambio
  const authState = (state: RootState) => state.auth;
  console.log(authState);

  const handleLogout = async () => {
    try {
      await deleteItem('authToken');
      dispatch(logout());
    } catch (error) {
      console.log('Error to log out', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatScreen;
