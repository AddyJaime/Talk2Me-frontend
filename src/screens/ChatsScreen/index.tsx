// React and React Native
import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

// External API
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from './style';
import startdustImagine from '../../assets/images/stardust.png';

// hooks
import useChatSocket from '@/hooks/useChatSocket';
import useAnimation from '@/hooks/useAnimation';
import colors from '@/styles/colors';

export const ChatsScreen: React.FC = () => {
  const sendMessage = useChatSocket();
  const scrollRef = useRef<ScrollView>(null);
  const [text, setMessage] = useState('');
  const [focused, setFocused] = useState(false);
  const { Image: AnimatedImage } = Animated;
  const translateX = useAnimation();

  const userId = 1;
  const { conversation } = useSelector(
    (state: RootState) => state.conversations,
  );
  // tirarle un ojo a esto
  useEffect(() => {
    if (scrollRef.current && conversation?.messages?.length) {
      scrollRef.current.scrollToEnd({ animated: true });
    }
  }, [conversation?.messages]);

  return (
    <View style={styles.container}>
      <AnimatedImage
        source={startdustImagine}
        style={[
          styles.backgroundImage,
          {
            transform: [{ translateX }],
          },
        ]}
        resizeMode="cover"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        style={styles.container}
      >
        <ScrollView
          ref={scrollRef}
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
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
                      message.senderId === userId
                        ? colors.chatSentBubble
                        : colors.chatReceivedBubble,
                  },
                ]}
              >
                <Text style={styles.messageText}>{message.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View
          style={[
            styles.inputContainer,
            {
              paddingBottom: focused ? 5 : 35,
            },
          ]}
        >
          <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={setMessage}
            style={[
              styles.messageInput,
              focused && {
                borderColor: colors.buttonBackgroundColor,
                borderWidth: 1,
              },
            ]}
            placeholder="Type..."
            placeholderTextColor="#999"
            value={text}
          />
          <TouchableOpacity
            onPress={() => {
              if (!text.trim() || !conversation) return;
              const messageToSend = {
                text: text,
                senderId: userId,
                receiverId: conversation?.receiverId ?? 0,
                conversationId: conversation?.id ?? 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              sendMessage(messageToSend);
              setMessage('');
            }}
            style={styles.sendButton}
          >
            <Ionicons name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
