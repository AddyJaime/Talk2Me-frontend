import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native';
import { RootStackParamList } from '@types';
import { fetchConversations } from '@api/conversationApi';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { setConversations } from 'redux/conversations/conversationsSlice';

const ChatScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const conversations = useSelector(
    (state: RootState) => state.conversations.conversations,
  );

  const [searchTerm, setSearchTerm] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('SearchUsers')}>
          <Ionicons
            name="search"
            size={20}
            color="black"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
      headerShown: true,
      title: 'Chats',
    });
  });

  const filteredChats = Array.isArray(conversations)
    ? conversations.filter(
        (conversation) =>
          conversation.participant.fullName.includes(
            searchTerm.toLowerCase(),
          ) ||
          conversation.participant.email
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      )
    : [];

  useEffect(() => {
    const getData = async () => {
      const data = await fetchConversations();
      console.log(data);
      dispatch(setConversations(data ?? []));
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chats</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        {filteredChats.length === 0 ? (
          <Text>There is not chat</Text>
        ) : (
          conversations.map((chat: any) => (
            <View style={styles.chatsBox} key={chat.id}>
              <View style={styles.rowBetween}>
                <Text style={styles.name}>{chat.participant.fullName}</Text>
                <Text style={chat.online ? styles.online : styles.offline}>
                  {moment(chat.messages[0].createdAt).fromNow()}
                </Text>
                {chat.unreadCount > 0 && (
                  <View style={styles.circule}>
                    <Text style={styles.circuleText}>{chat.unreadCount}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.message}> {chat.messages[0].text}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default ChatScreen;
