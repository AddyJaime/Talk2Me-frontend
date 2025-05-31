import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@types';
import { TextInput } from 'react-native-gesture-handler';

const SearchUserScreen: React.FC = () => {
  const [searchUser, setsearchUser] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // aqui utiliza el useffect para hacer una petcion

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchUsers')}
      ></TouchableOpacity>
      <Ionicons name="search" size={20} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Search Users"
        value={searchUser}
        onChangeText={setsearchUser}
      />
    </View>
  );
};

export default SearchUserScreen;
