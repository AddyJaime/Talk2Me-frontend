import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
const StatusScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Status</Text>
    </View>
  );
};

export default StatusScreen;
