import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useNavigation } from '@react-navigation/native';

// para chatear
export const ChatsScreen: React.FC = () => {
  const isFocused = useNavigation().isFocused();
  const scrollRef = useRef<ScrollView>(null);
  const userId = 1;
  const { conversation } = useSelector(
    (state: RootState) => state.conversations,
  );

  useEffect(() => {
    if (conversation) {
    }

    scrollRef?.current?.scrollToEnd();
    // console.log(JSON.stringify({ conversation }, null, 2));
  }, [conversation, isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        {conversation?.messages.map((message, key) => (
          <View
            key={message.id}
            style={{
              paddingHorizontal: 15,
              paddingVertical: 2,
              alignItems:
                message.senderId === userId ? 'flex-end' : 'flex-start',
            }}
          >
            <View
              style={{
                backgroundColor: message.senderId === userId ? 'green' : 'gray',
                borderRadius: 25,
                padding: 10,
                // marginVertical: 1,
              }}
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
          onChangeText={(value) => console.log(value)}
          style={{
            width: '100%',
            height: 45,
            paddingHorizontal: 15,
            borderRadius: 25,
            backgroundColor: 'lightgray',
          }}
          placeholder="Type..."
        />
      </View>
    </View>
  );
};
