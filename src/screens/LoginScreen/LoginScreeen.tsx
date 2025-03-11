import React from 'react';
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
import talk2meBgOff from '@assets/images/Talk2me-Background-Off.png';
import backgroundImage from '@assets/images/background.png';
import lightImage from '@assets/images/light.png';

const LoginScreen: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('Data');
  };

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
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
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <StatusBar backgroundColor="black" />
      </View>
    </View>
  );
};

export default LoginScreen;
