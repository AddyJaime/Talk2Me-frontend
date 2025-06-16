import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native';
import { Conversation, RootStackParamList } from '@types';
import { fetchConversations } from '@api/conversationApi';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { setConversations } from 'redux/conversations/conversationsSlice';
import logo from '@assets/images/ChatGPT Image 14 jun 2025, 01_46_15 p.m..png';
import UserAvatar from 'react-native-user-avatar';

export const ConversationScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const conversations = useSelector(
    (state: RootState) => state.conversations.conversations,
  );

  const [searchTerm, setSearchTerm] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Image style={styles.logo} source={logo} />,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('SearchUsers')}>
          <Ionicons
            name="search"
            size={28}
            color="black"
            style={{ marginRight: 17 }}
          />
        </TouchableOpacity>
      ),
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

      dispatch(setConversations(data ?? []));
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#b2bec3"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {filteredChats.length === 0 ? (
        <Text style={styles.noChatsText}>No chats found</Text>
      ) : (
        filteredChats.map((chat: Conversation) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={styles.chatsBox}
            key={chat.id}
          >
            <View style={styles.rowBetween}>
              <UserAvatar
                style={styles.avatar}
                size={40}
                name={chat.participant.fullName}
              />

              <View style={{ flex: 1 }}>
                <View style={styles.rowBetween}>
                  <Text style={styles.name}>{chat.participant.fullName}</Text>
                  <Text style={styles.time}>
                    {moment(chat.messages[0].createdAt).fromNow()}
                  </Text>
                </View>

                <View style={styles.rowBetween}>
                  <Text
                    style={styles.message}
                    numberOfLines={1}
                    ellipsizeMode="tail"

                    // Si el texto es muy largo para la línea, muestra puntos suspensivos al final, así:
                    // "Hola, mucho gus..."
                  >
                    {chat.messages[0].text}
                  </Text>

                  {chat.unreadCount > 0 && (
                    <View style={styles.circule}>
                      <Text style={styles.circuleText}>{chat.unreadCount}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};
