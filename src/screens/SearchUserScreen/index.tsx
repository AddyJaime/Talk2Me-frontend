// React & React Native
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// External libaries
import UserAvatar from 'react-native-user-avatar';
import { Ionicons } from '@expo/vector-icons';

// types
import { RootStackParamList, User } from '@types';

// API & Redux
import { useDispatch, useSelector } from 'react-redux';
import { createConversation } from '@/api/conversationApi';
import { fetchUsers } from '@api/usersApi';
import { RootState } from 'redux/store';
import { setUsers } from 'redux/users/usersSlice';
import { setConversation } from '@/redux/conversations/conversationsSlice';

//  Styles and Assets
import styles from './style';

export const SearchUserScreen: React.FC = () => {
  const [searchUser, setsearchUser] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { users, user } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const data = await fetchUsers();
      dispatch(setUsers(data ?? []));
    } catch (error) {
      console.log('Error getting users', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStartConversation = async (id: number) => {
    try {
      const conversation = await createConversation(user.id, id);
      dispatch(setConversation(conversation));
      navigation.navigate('Chat');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchUsers')}
      ></TouchableOpacity>
      <View style={styles.searchUserInput}>
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
                onPress={() => handleStartConversation(user.id)}
                key={user.id}
              >
                <View style={styles.usersBox}>
                  <View style={styles.circleDimention}>
                    <UserAvatar size={50} name={user.fullName} />
                  </View>
                  <Text style={styles.usersName}>{user.fullName}</Text>
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
