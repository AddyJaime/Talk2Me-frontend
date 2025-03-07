import React, { useEffect, useRef } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

import { StatusBar } from 'native-base';

// Navigation
import { NavigationProp, useNavigation } from '@react-navigation/native';

// types
import { RootStackParamList } from 'types';

// image
import logo from '@assets/images/Talk2me-logo.png';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Login');
  //   }, 3000);
  // }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f2034',
  },
  logo: {
    width: 600,
    height: 600,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
