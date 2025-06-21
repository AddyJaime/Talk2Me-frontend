import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useNavigation } from '@react-navigation/native';
import { Message } from '@/types';
import { sendMessagestoBackend } from '@/api/chatApi';

// para chatear
export const ChatsScreen: React.FC = () => {
  const isFocused = useNavigation().isFocused();
  const scrollRef = useRef<ScrollView>(null);
  const [text, setMessage] = useState('');
  // aqui debo usar el user activo y tomarlo del redux para saber quien es que esta acttivo
  const userId = 1;
  const { conversation } = useSelector(
    (state: RootState) => state.conversations,
  );

  const sendMessage = async (data: Message) => {
    try {
      const backendData = await sendMessagestoBackend(data);
      console.log(backendData);
    } catch (error) {
      console.log({ Error: 'error sending message' });
    }
  };

  useEffect(() => {
    if (conversation) {
    }

    scrollRef?.current?.scrollToEnd();
    // console.log(JSON.stringify({ conversation }, null, 2));
  }, [conversation, isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        {conversation?.messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messagesDisplay,
              {
                alignItems:
                  message.senderId === userId ? 'flex-end' : 'flex-start',
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
        <Button
          onPress={() => {
            const messageToSend = {
              text: text,
              senderId: userId,

              conversation: conversation?.id,
            };
            sendMessage(messageToSend);
          }}
          title="send"
          color="white"
        />
      </View>
    </View>
  );
};
// que quiero lograr, o
