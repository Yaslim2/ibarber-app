import React from 'react';

import Text from '@/shared/components/Text';
import { SignUpStackTypes } from '@/shared/types/navigation';

import IconComponent from './components/Icon';
import ImageComponent from './components/Image';
import PermissionModal from './components/PermissionModal';
import useController from './index.controller';
import { Container, Content } from './styles';

const SetProfileImage: SignUpStackTypes.ComponentProps<
  SignUpStackTypes.Routes.SetProfileImage
> = props => {
  const {
    handleOpenCamera,
    handleRemoveImage,
    imageLoading,
    imageUrl,
    openAppSettings,
  } = useController(props);

  return (
    <Container>
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
    </Container>
  );
};

export default SetProfileImage;
