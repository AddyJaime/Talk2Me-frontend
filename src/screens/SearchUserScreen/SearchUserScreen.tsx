import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, User } from '@types';
import { TextInput } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { fetchUsers } from '@api/usersApi';
import { useDispatch } from 'react-redux';
import { setUsers } from 'redux/users/usersSlice';

const SearchUserScreen: React.FC = () => {
  const [searchUser, setsearchUser] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        console.log(data);
        dispatch(setUsers(data ?? []));
      } catch (error) {
        console.log('error getting users', error);
      }
    };
    fetchData();
  }, []);

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
      <View>
        {users.length === 0 ? (
          <Text>There is not users</Text>
        ) : (
          users.map((user: User) => (
            <View key={user.id}>
              <Text>{user.fullName}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
};
// to do mostrar los datos en pantalla con un useffect y utlizar mi funcion
export default SearchUserScreen;
