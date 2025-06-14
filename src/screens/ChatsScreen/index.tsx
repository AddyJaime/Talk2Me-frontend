import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ChatsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 16,
  },
});
