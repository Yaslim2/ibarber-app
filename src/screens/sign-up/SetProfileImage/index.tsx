import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

const SetProfileImage = () => {
  const [selectedImage] = useState(null);

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      console.log(result.assets);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      console.log(result.assets);
    }
  };

  return (
    <View>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button title="Selecionar imagem" onPress={selectImage} />
      <Button title="Tirar foto" onPress={takePhoto} />
    </View>
  );
};

export default SetProfileImage;
