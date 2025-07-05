// React and React Native
import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

// Types

// External API
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from './style';
import startdustImagine from '../../assets/images/stardust.png';

// hooks
import useChatSocket from '@/hooks/useChatSocket';

export const ChatsScreen: React.FC = () => {
  const sendMessage = useChatSocket();
  const scrollRef = useRef<ScrollView>(null);
  const [text, setMessage] = useState('');
  const [focused, setFocused] = useState(false);
  const { Image: AnimatedImage } = Animated;
  const translateX = useRef(new Animated.Value(0)).current;

  const userId = 1;
  const { conversation } = useSelector(
    (state: RootState) => state.conversations,
  );

  const startLoopAnimation = () => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -100,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  useEffect(() => {
    startLoopAnimation();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AnimatedImage
        source={startdustImagine}
        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: -1,
          transform: [{ translateX }],
        }}
        resizeMode="cover"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        style={{ flex: 1 }}
      >
        <ScrollView
          ref={scrollRef}
          style={{ flex: 1, marginTop: 10 }}
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
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f9f9f9',
            borderTopWidth: 1,
            borderTopColor: '#eee',
            paddingTop: 4,
            paddingBottom: focused ? 5 : 35,
            paddingHorizontal: 12,
          }}
        >
          <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={setMessage}
            style={[
              styles.textInput,
              focused && { borderColor: '#007AFF', borderWidth: 1 },
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
            style={{
              marginRight: 8,
              backgroundColor: '#007AFF',
              borderRadius: 20,
              padding: 10,
              marginLeft: 6,
            }}
          >
            <Ionicons name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
