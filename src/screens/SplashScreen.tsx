import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>here goes the splash screen</Text>
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

export default SplashScreen;
