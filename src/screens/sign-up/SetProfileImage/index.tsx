import React, { useState } from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-image-crop-picker';

import IconComponent from './components/Icon';
import ImageComponent from './components/Image';

const SetProfileImage = () => {
  const [imageUrl] = useState<Image>();
  const [imageLoading] = useState<boolean>(false);

  return (
    <View>
      {imageUrl ? (
        <ImageComponent image={imageUrl} handleRemoveImage={() => null} />
      ) : (
        <IconComponent handleOpenCamera={() => null} loading={imageLoading} />
      )}
    </View>
  );
};

export default SetProfileImage;
