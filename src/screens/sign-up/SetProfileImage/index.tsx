import React from 'react';

import Button from '@/shared/components/Button';
import Text from '@/shared/components/Text';
import { ThemeOverride } from '@/shared/styles/theme';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import IconComponent from './components/Icon';
import ImageComponent from './components/Image';
import PermissionModal from './components/PermissionModal';
import useController from './index.controller';
import { Container, Content } from './styles';

const SetProfileImage: SignUpStackTypes.ComponentProps<
  SignUpStackTypes.Routes.SetProfileImage
> = props => {
  const theme = useTheme() as ThemeOverride;
  const {
    handleOpenCamera,
    handleRemoveImage,
    imageLoading,
    imageUrl,
    openAppSettings,
    handleNext,
  } = useController(props);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <PermissionModal openSettings={openAppSettings} />
      <Content>
        <Text size={24} font="primary" weight="bold">
          {'Foto de Perfil'}
        </Text>
        {imageUrl ? (
          <ImageComponent
            image={imageUrl}
            handleRemoveImage={handleRemoveImage}
          />
        ) : (
          <IconComponent
            handleOpenCamera={handleOpenCamera}
            loading={imageLoading}
          />
        )}
        <Text size={14} font="primary" weight="light">
          {'Clique no ícone para escolher a sua foto de perfil.'}
        </Text>
      </Content>
      <Button
        loading={imageLoading}
        onPress={handleNext}
        disabled={!imageUrl}
        buttonColor={theme.colors.primary}
      >
        Avançar
      </Button>
    </Container>
  );
};

export default SetProfileImage;
