import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Login Screen </Text>
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

export default LoginScreen;
