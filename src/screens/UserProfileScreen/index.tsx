import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UserAvatar from 'react-native-user-avatar';
import styles from './styles';

type EditingField = 'name' | 'about' | null;

export const UserProfile: React.FC = () => {
  const [name, setName] = useState('Addy Jaime');
  const [about, setAbout] = useState('Hey there! I am using Talk2Me.');
  const [phone] = useState('+1 (305) 277-8080');
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editing, setEditing] = useState<EditingField>(null);
  const [temp, setTemp] = useState('');
  // field representa los tipos que acabo de definir alla arriba
  const openEdit = (field: EditingField) => {
    setEditing(field);
    setTemp(field === 'name' ? name : about);
    setIsModalVisible(true);
  };

  const cancelModal = () => {
    setIsModalVisible(false);
    setEditing(null);
    setTemp('');
  };

  const saveModal = () => {
    if (editing === 'name') setName(temp.trim());
    if (editing === 'about') setAbout(temp.trim());
    cancelModal();
  };

  const pickAvatar = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') return;

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      setAvatarUri(result.assets[0].uri);
      // TODO: subir avatar a el backend o storage
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarCard}>
        <TouchableOpacity onPress={pickAvatar} activeOpacity={0.8}>
          <UserAvatar
            size={100}
            name={name || 'User'}
            src={avatarUri || undefined}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={pickAvatar}>
          <Text style={styles.avatarEdit}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        <Text style={styles.cellLabel}>Name</Text>
        <TouchableOpacity
          style={styles.cellBox}
          onPress={() => openEdit('name')}
        >
          <Text numberOfLines={1} style={styles.cellValue}>
            {name}
          </Text>
        </TouchableOpacity>

        <Text style={styles.cellLabel}>Phone number</Text>
        <View style={[styles.cellBox, styles.disabledBox]}>
          <Text numberOfLines={1} style={styles.cellValue}>
            {phone}
          </Text>
        </View>

        <Text style={styles.cellLabel}>About</Text>
        <TouchableOpacity
          style={styles.cellBox}
          onPress={() => openEdit('about')}
        >
          <Text numberOfLines={1} style={styles.cellValue}>
            {about}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent
        onRequestClose={cancelModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              {editing === 'name' ? 'Edit name' : 'Edit about'}
            </Text>

            <TextInput
              autoFocus
              value={temp}
              onChangeText={setTemp}
              style={styles.input}
              placeholder={editing === 'name' ? 'Your name' : 'Hey there!'}
              maxLength={editing === 'name' ? 50 : 140}
              returnKeyType="done"
              onSubmitEditing={saveModal}
            />

            <View style={styles.actions}>
              <TouchableOpacity onPress={cancelModal}>
                <Text style={styles.cancelbutton}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={saveModal}>
                <Text style={styles.saveButton}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
