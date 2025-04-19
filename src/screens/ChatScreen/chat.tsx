import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native';

const ChatScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dummyChats = [
    {
      id: '1',
      fullName: 'Carlos Santana',
      email: 'carlos@email.com',
      online: true,
      message: ['Hola'],
    },
    {
      id: '2',
      fullName: 'Camila Reyes',
      email: 'camila@email.com',
      online: false,
      message: ['Hola'],
    },
    {
      id: '3',
      fullName: 'Pedro Mendez',
      email: 'pedro@email.com',
      online: true,
      message: ['Hola'],
    },
    {
      id: '4',
      fullName: 'Albert',
      email: 'albert@email.com',
      online: true,
      message: ['Que tal?'],
    },
    {
      id: '5',
      fullName: 'Pedro Martinez',
      email: 'pedro@email.com',
      online: false,
      message: ['Whats up big dog?'],
    },
    {
      id: '6',
      fullName: 'Milo Little',
      email: 'milo@email.com',
      online: true,
      message: ['Hey'],
    },
  ];

  const filteredChats = dummyChats.filter(
    (chat) =>
      chat.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
          // los parentesis aqui ejecutan codigo
          filteredChats.map((chat) => (
            <View style={styles.chatsBox} key={chat.id}>
              <View style={styles.rowBetween}>
                <Text style={styles.name}>{chat.fullName}</Text>
                <Text style={chat.online ? styles.online : styles.offline}>
                  {chat.online ? 'Online' : 'Offline'}
                </Text>
              </View>
              <Text style={styles.message}>{chat.message}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default ChatScreen;
