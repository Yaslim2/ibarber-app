import React, { FC } from 'react';
import { TouchableRipple } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import { ImageComponentProps } from './props';
import {
  ContainerImage,
  ImageStyled,
  default as screenStyles,
  Container,
} from './styles';

const ImageComponent: FC<ImageComponentProps> = ({
  image,
  handleRemoveImage,
}) => {
  const theme = useTheme() as ThemeOverride;
  const { buttonContainerStyle } = screenStyles(theme);

  return (
    <Container>
      <TouchableRipple
        style={buttonContainerStyle}
        onPress={handleRemoveImage}
        borderless
      >
        <FeatherIcon size={18} color={theme.colors.onPrimary} name="x" />
      </TouchableRipple>
      <ContainerImage>
        <ImageStyled source={{ uri: image.uri }} resizeMode="stretch" />
      </ContainerImage>
    </Container>
  );
};

export default ImageComponent;
