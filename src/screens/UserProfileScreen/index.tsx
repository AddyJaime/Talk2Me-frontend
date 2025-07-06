import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import UserAvatar from 'react-native-user-avatar';

export const UserProfile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>User Profile</Text>
      <UserAvatar style={styles.avatar} size={100} />
    </View>
  );
};
