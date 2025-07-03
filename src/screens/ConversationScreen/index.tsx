// React & React Native
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';

// External libaries
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import UserAvatar from 'react-native-user-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// types
import { Conversation, RootStackParamList } from '@types';
import { AppDispatch, RootState } from 'redux/store';

// API & Redux
import { fetchConversation, fetchConversations } from '@api/conversationApi';
import {
  setConversation,
  setConversations,
} from 'redux/conversations/conversationsSlice';

// Styles and ASSETS
import styles from './styles';
import logo from '@assets/images/foto.png';

export const ConversationScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { user } = useSelector((state: RootState) => state.users);

  const conversations = useSelector(
    (state: RootState) => state.conversations.conversations,
  );
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredChats, setFilteredChats] = useState<Conversation[]>([]);

  /// Layout: Header config
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Image style={styles.logo} source={logo} />,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('SearchUsers')}>
          <Ionicons
            name="search"
            size={28}
            color="#555"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // Fetch conversations
  const loadConversations = async () => {
    const data = await fetchConversations(user.id);
    dispatch(setConversations(data));
  };

  useLayoutEffect(() => {
    loadConversations();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', async () => {
  //     await loadConversations();
  //   });

  //   return unsubscribe;
  // }, []);

  // Pull to refresh
  const onRefresh = async () => {
    setIsRefreshing(true);
    await loadConversations();
    setIsRefreshing(false);
  };

  // Open a conversation
  const handleOpenConversation = async (id: number) => {
    try {
      const conversation = await fetchConversation(id);
      dispatch(setConversation(conversation));
      navigation.navigate('Chat');
    } catch (error) {
      console.log('Error loading conversation:', error);
    }
  };

  // Filter conversations
  useEffect(() => {
    const _filteredChats = conversations.filter((conversation) => {
      return conversation.participant.fullName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setFilteredChats(_filteredChats);
    // cuando la app carga react lee las dependecisas de este useffect
  }, [conversations, searchTerm]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white' }}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={isRefreshing} />
      }
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#b2bec3"
          value={searchTerm}
          onChangeText={(value) => setSearchTerm(value)}
        />

        {filteredChats.length === 0 ? (
          <Text style={styles.noChatsText}>No chats found</Text>
        ) : (
          filteredChats.map((chat: Conversation) => (
            <TouchableOpacity
              onPress={() => handleOpenConversation(chat.id)}
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
                      {moment(chat?.messages[0]?.createdAt).fromNow()}
                    </Text>
                  </View>

                  <View style={styles.rowBetween}>
                    <Text
                      style={styles.message}
                      numberOfLines={1}
                      // Si el texto es muy largo para la línea, muestra puntos suspensivos al final, así:
                      // "Hola, mucho gus..."
                      ellipsizeMode="tail"
                    >
                      {chat?.messages[0]?.text}
                    </Text>

                    {chat.unreadCount > 0 && (
                      <View style={styles.circule}>
                        <Text style={styles.circuleText}>
                          {chat.unreadCount}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};
