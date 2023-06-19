import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableRipple, useTheme } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { ThemeOverride } from '@/shared/styles/theme';

import { ImageComponentProps } from './props';
import { ContainerImage, ImageStyled, default as screenStyles } from './styles';

const ImageComponent: FC<ImageComponentProps> = ({
  image,
  handleRemoveImage,
}) => {
  const theme: ThemeOverride = useTheme();
  const { buttonContainerStyle } = screenStyles(theme);

  return (
    <View>
      <TouchableRipple
        style={buttonContainerStyle}
        onPress={handleRemoveImage}
        borderless
      >
        <FeatherIcon
          size={18}
          color={theme.dark ? theme.colors.primary : theme.colors.onPrimary}
          name="x"
        />
      </TouchableRipple>
      <ContainerImage>
        <ImageStyled
          source={{ uri: `data:${image.mime};base64,${image.data}` }}
          resizeMode="stretch"
        />
      </ContainerImage>
    </View>
  );
};

export default ImageComponent;
