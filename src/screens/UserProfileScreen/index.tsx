import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import styles from './styles';
import UserAvatar from 'react-native-user-avatar';

export const UserProfile: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('addy jaime');

  const opennModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Profile</Text>
      <View style={styles.innerContainer}>
        <UserAvatar style={styles.avatar} size={100} />
        <Text>Name</Text>
        <TouchableOpacity onPress={opennModal}>
          <Text style={styles.name}>Addy Jaime</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} style={styles.modalContainer}>
        <TouchableOpacity onPress={closeModal}>
          <Text style={styles.cancelbutton}>Cancel</Text>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
        <TextInput style={styles.name}>{name}</TextInput>
      </Modal>
    </View>
  );
};
