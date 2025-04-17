import { useAsyncStorage } from '@hooks';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { logout } from 'redux/auth/authSlice';

const SettingScreen: React.FC = () => {
  const { deleteItem } = useAsyncStorage();
  const dispatch = useDispatch();

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
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
