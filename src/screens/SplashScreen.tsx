import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { StatusBar } from 'native-base';

// Navigation
import { NavigationProp, useNavigation } from '@react-navigation/native';

// types
import { RootStackParamList } from 'types';

// image
import logo from '@assets/images/Talk2me-logo.png';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f2034" />
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
