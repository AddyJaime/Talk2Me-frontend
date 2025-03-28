import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

interface ClearableInputProps {
  value: string;
  onChangeText: (text: string) => void;
  style?: any;
  placeholder: string;
  placeholderTextColor: string;
}

const ClearableInput: React.FC<ClearableInputProps> = ({
  value,
  onChangeText,
  style,
  ...rest
}) => {
  return (
    <View>
      <TextInput
        style={[styles.input, style]}
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
