import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './Style';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@types';

const SearchUserScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <Ionicons name="search" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchUserScreen;
