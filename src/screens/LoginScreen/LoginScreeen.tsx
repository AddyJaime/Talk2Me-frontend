import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import styles from '@screens/LoginScreen/styles';
import logo from '@assets/images/Talk2me-logo.png';

const LoginScreen: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('Data');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
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
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
