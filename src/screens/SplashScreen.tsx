import React, { useEffect } from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';

// Navigation
import { NavigationProp, useNavigation } from '@react-navigation/native';

// types
import { RootStackParamList } from 'types';

// image
import logo from '@assets/images/Talk2me-logo.png';

// Obtener dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: width * 0.9,
    height: height * 0.9,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default SplashScreen;
