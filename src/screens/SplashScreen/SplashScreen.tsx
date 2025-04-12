import React from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'react-native';

import logo from '@assets/images/Talk2me-logo.png';

import styles from '@screens/SplashScreen/styles';

const SplashScreen: React.FC = () => {
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
