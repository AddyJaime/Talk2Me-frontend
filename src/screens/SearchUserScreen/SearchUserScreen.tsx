import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
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
import UserAvatar from 'react-native-user-avatar';

const SearchUserScreen: React.FC = () => {
  const [searchUser, setsearchUser] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);

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
      <View
        style={{
          height: 45,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ebebeb',
          padding: 5,
          paddingLeft: 15,
          marginBottom: 10,
          borderRadius: 25,
        }}
      >
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Search Users"
          placeholderTextColor={'gray'}
          value={searchUser}
          onChangeText={setsearchUser}
        />
      </View>
      <View>
        {users.length === 0 ? (
          <Text>There is not users</Text>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl
                onRefresh={() => {
                  setIsRefreshing(true);
                  setTimeout(() => {
                    setIsRefreshing(false);
                  }, 2000);
                }}
                refreshing={isRefreshing}
              />
            }
          >
            {users.map((user: User) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                key={user.id}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor: 'white',
                    marginBottom: 5,
                    height: 50,
                    paddingVertical: 5,
                  }}
                >
                  <View style={{ width: 50, height: 50 }}>
                    <UserAvatar size={50} name={user.fullName} />
                  </View>
                  <Text
                    style={{ fontSize: 18, fontWeight: '600', paddingLeft: 5 }}
                  >
                    {user.fullName}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
// siguinete paso aqui agregar un estaod de online o off y por lo menos un avatar falso

export default SearchUserScreen;

// include
// where
// Operadores
// Op.ne: not equal
// Op.eq: equal
// Op.like: contiene texto
// Op.in: array de valores
// Op.or: uno u otro
// Op.and: ambos
// Relaciones
// params
