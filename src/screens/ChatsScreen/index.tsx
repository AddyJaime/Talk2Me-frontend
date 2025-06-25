import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import { sendMessagestoBackend } from '@/api/chatApi';
import {
  connectSocket,
  disconnectedSocket,
  emitMessage,
  listenForMessages,
  removeMessageListener,
} from 'socket/socket';

import { useDispatch } from 'react-redux';
import { addMessage } from '@/redux/conversations/conversationsSlice';
import { Message } from '@/types';
// import { useNavigation } from '@react-navigation/native';

// para chatear
export const ChatsScreen: React.FC = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [text, setMessage] = useState('');
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  // aqui debo usar el user activo y tomarlo del redux para saber quien es que esta acttivo
  const userId = 1;
  const { conversation } = useSelector(
    (state: RootState) => state.conversations,
  );
  useEffect(() => {
    connectSocket();
    listenForMessages(async (message: Message) => {
      console.log('Message receive', message);
      dispatch(addMessage(message));
    });

    return () => {
      removeMessageListener();
      disconnectedSocket();
    };
  }, []);

  const sendMessage = async () => {
    if (!text.trim() || !conversation) return;

    const messageToSend = {
      text: text,
      senderId: userId,
      receiverId: conversation?.receiverId ?? 0,
      conversationId: conversation.id ?? 0,
      createdAt: Date(),
      updatedAt: Date(),
    };

    try {
      const backendData = await sendMessagestoBackend(messageToSend);
      emitMessage(backendData);
      setMessage('');
    } catch (error) {
      console.log({ Error: 'Error sending Message', error });
    }
  };

  // useEffect(() => {
  //   navigation.addListener('blur', () => {
  //     console.log({ isFocused: false });
  //     dispatch(setConversation(null));
  //   });

  //   navigation.addListener('focus', () => {
  //     console.log({ isFocused: true });
  //   });
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        {conversation?.messages?.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messagesDisplay,
              {
                alignItems:
                  message?.senderId === userId ? 'flex-end' : 'flex-start',
              },
            ]}
          >
            <View
              style={[
                styles.messagesColor,
                {
                  backgroundColor:
                    message.senderId === userId ? 'green' : 'gray',
                },
              ]}
            >
              <Text style={styles.text}>{message.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 100,
          padding: 20,
          backgroundColor: 'red',
        }}
      >
        <TextInput
          onChangeText={setMessage}
          style={styles.textInput}
          placeholder="Type..."
          value={text}
        />
        <Button onPress={sendMessage} title="send" color="white" />
      </View>
    </View>
  );
};

// que quiero lograr, o
