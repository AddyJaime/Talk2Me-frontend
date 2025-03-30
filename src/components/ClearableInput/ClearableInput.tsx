import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

interface ClearableInputProps {
  value: string;
  // void signifca que la funcion no devuelve ningun valor, cuando escribo algo en los inputs la funcion se activa y aqui el string viene siendo lo que escribes
  onChangeText: (text: string) => void;
  placeholder: string;
  placeholderTextColor: string;
}

const ClearableInput: React.FC<ClearableInputProps> = ({
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {value?.length > 0 && (
        <TouchableOpacity
          style={styles.clearIcon}
          onPress={() => onChangeText('')}
        >
          <Feather name="x-circle" size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ClearableInput;
