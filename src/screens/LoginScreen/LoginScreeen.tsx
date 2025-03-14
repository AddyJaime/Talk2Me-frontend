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
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';

const LoginScreen: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = () => {
    console.log('Data');
  };

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <Animated.Image
        entering={FadeInUp.delay(1000).duration(1000).springify().damping(3)}
        source={lightImage}
        style={styles.lightImage}
      />
      <Animated.Image
        entering={FadeInUp.delay(1000).duration(1000).springify().damping(3)}
        source={lightImage}
        style={styles.lightImageTwo}
      />
      <Image source={talk2meBgOff} style={styles.logo} />
      <View style={styles.form}>
        <Animated.View
          entering={FadeInUp.delay(1000).duration(1000).springify().damping(3)}
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
                secureTextEntry={!isPasswordVisible}
              />
            )}
          />
        </Animated.View>

        {/* <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Iconicons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={22}
            color="#888"
          />
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={styles.buttonText}
          >
            Login
          </Animated.Text>
        </TouchableOpacity>
        <Animated.View
          entering={FadeInUp.delay(1000).duration(1000).springify().damping(3)}
        >
          <View style={styles.signUpLink}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity>
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
