import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

// para chatear
export const ChatsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
    </View>
  );
};
