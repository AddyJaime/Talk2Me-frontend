import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import styles from '@screens/LoginScreen/styles';
import Iconicons from 'react-native-vector-icons/Ionicons';
import talk2meBgOff from '@assets/images/Talk2me-Background-Off.png';
import backgroundImage from '@assets/images/background.png';
import lightImage from '@assets/images/light.png';

// Animations
import Animated, { FadeIn, FadeInUp, FadeOut } from 'react-native-reanimated';

const LoginScreen: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = () => {
    console.log('Data');
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        entering={FadeInUp.delay(200).duration(1000)}
        source={backgroundImage}
        style={styles.backgroundImage}
      />
      <Image source={lightImage} style={styles.lightImage} />
      <Image source={lightImage} style={styles.lightImageTwo} />
      <Image source={talk2meBgOff} style={styles.logo} />
      <View style={styles.form}>
        <Controller
          control={control}
          name="Email"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#888"
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
              placeholderTextColor="#888"
              onChange={field.onChange}
              value={field.value}
              secureTextEntry={!isPasswordVisible}
            />
          )}
        />

        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Iconicons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={22}
            color="#888"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpLink}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpButton}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <StatusBar barStyle="light-content" />
      </View>
    </View>
  );
};

export default LoginScreen;
