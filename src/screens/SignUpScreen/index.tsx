import React from 'react';

// react components
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';

// hooks
import { Controller, useForm } from 'react-hook-form';

// Styles
import styles from '@screens/SignUpScreen/styles';

// images
import talk2meBgOff from '@assets/images/Talk2me-Background-Off.png';
import backgroundImage from '@assets/images/background.png';
import lightImage from '@assets/images/light.png';

// Animations
import Animated, { FadeInUp } from 'react-native-reanimated';

// navigation
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Param
import { RootStackParamList } from '../../types';
import { registerUser } from '@api/authApi';

// icons

import ClearableInput from '@components/ClearableInput/ClearableInput';

export const SignUpScreen: React.FC = () => {
  const { control, handleSubmit, reset } = useForm();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSubmit = async (formValues: any) => {
    try {
      const backendData = await registerUser(formValues);
      console.log(backendData.user);
      reset({
        fullName: formValues.fullName,
        email: formValues.email,
        password: '',
      });
      navigation.navigate('Chat');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <Animated.Image
        source={lightImage}
        entering={FadeInUp.delay(500).duration(1000).springify().damping(2)}
        style={styles.lightImage}
      />

      <Animated.Image
        source={lightImage}
        entering={FadeInUp.delay(500).duration(1000).springify().damping(2)}
        style={styles.lightImageTwo}
      />
      <Image source={talk2meBgOff} style={styles.logo} />

      <View style={styles.form}>
        <Animated.View
          entering={FadeInUp.delay(500).duration(1000).springify().damping(3)}
        >
          <Controller
            control={control}
            name="fullName"
            rules={{ required: true }}
            render={({ field }) => (
              <View>
                <ClearableInput
                  placeholder="Full Name"
                  placeholderTextColor="black"
                  onChangeText={field.onChange}
                  value={field.value}
                />
              </View>
            )}
          />

          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field }) => (
              <ClearableInput
                placeholder="Email "
                placeholderTextColor="black"
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <ClearableInput
                placeholder="Password"
                secureTextEntry={false}
                placeholderTextColor="black"
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
          <Animated.View
            entering={FadeInUp.delay(500).duration(1000).springify().damping(3)}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.buttonText}>SIgnUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(500).duration(1000).springify().damping(3)}
        >
          <View style={styles.loginLink}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <StatusBar barStyle="light-content" />
      </View>
    </View>
  );
};

;
