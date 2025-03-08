import React, { useEffect } from 'react';
import { Image, View, StyleSheet, ActivityIndicator } from 'react-native';
import { StatusBar } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'types';
import logo from '@assets/images/Talk2me-logo.png';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f2034',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },
  logo: {
    width: 600,
    height: 600,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loader: {
    marginTop: -80,
  },
});

export default SplashScreen;
