import React from 'react';
// react components
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

// hooks
import { Controller, useForm } from 'react-hook-form';

// Styles
import styles from '@screens/LoginScreen/styles';

// images
import talk2meBgOff from '@assets/images/Talk2me-Background-Off.png';
import backgroundImage from '@assets/images/background.png';
import lightImage from '@assets/images/light.png';

// Animations
import Animated, { FadeInUp } from 'react-native-reanimated';

// navigation
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RootStackParamList } from 'types';

const LoginScreen: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSubmit = () => {
    console.log('Data');
  };

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <Animated.Image
        entering={FadeInUp.delay(500).duration(1000).springify().damping(2)}
        source={lightImage}
        style={styles.lightImage}
      />
      <Animated.Image
        entering={FadeInUp.delay(500).duration(1000).springify().damping(2)}
        source={lightImage}
        style={styles.lightImageTwo}
      />
      <Image source={talk2meBgOff} style={styles.logo} />
      <View style={styles.form}>
        <Animated.View
          entering={FadeInUp.delay(500).duration(1000).springify().damping(3)}
        >
          <Controller
            control={control}
            name="Email"
            render={({ field }) => (
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="black"
                keyboardType="email-address"
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="black"
                onChange={field.onChange}
                value={field.value}
                secureTextEntry={true}
              />
            )}
          />
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(500).duration(1000).springify().damping(3)}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(500).duration(1000).springify().damping(3)}
        >
          <View style={styles.signUpLink}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpButton}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <StatusBar barStyle="light-content" />
      </View>
    </View>
  );
};

export default LoginScreen;
