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
    },
    {
      id: '2',
      fullName: 'Camila Reyes',
      email: 'camila@email.com',
      online: false,
    },
    {
      id: '3',
      fullName: 'Pedro Mendez',
      email: 'pedro@email.com',
      online: true,
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
              <Text>{chat.fullName}</Text>
              <Text>{chat.email}</Text>
              <Text style={{ color: chat.online ? 'green' : 'red' }}>
                {chat.online ? 'Online' : 'Desconectado'}
              </Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default ChatScreen;
