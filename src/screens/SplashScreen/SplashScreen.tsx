import React, { useEffect } from 'react';
import { Image, View, StyleSheet, ActivityIndicator } from 'react-native';
import { StatusBar } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@types/types';
import logo from '@assets/images/Talk2me-logo.png';

import styles from '@screens/SplashScreen/styles';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f2034" />
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
      </View>
    </View>
  );
};

export default SplashScreen;
