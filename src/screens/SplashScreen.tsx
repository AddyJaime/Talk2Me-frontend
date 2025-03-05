import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Navigation
import { NavigationProp, useNavigation } from '@react-navigation/native';

// types
import { RootStackParamList } from 'types';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

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
