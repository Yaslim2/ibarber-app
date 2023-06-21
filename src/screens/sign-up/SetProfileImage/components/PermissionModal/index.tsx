import React, { FC } from 'react';
import { Modal, Portal } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '@/shared/components/Text';
import usePermissionModalStore from '@/shared/store/permission-modal';
import useThemeStore from '@/shared/store/theme';
import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';
import { shallow } from 'zustand/shallow';

import styles, {
  ButtonContainer,
  CloseIcon,
  ConfirmButton,
  ConfirmText,
  Content,
} from './styles';
import { PermissionModalProps } from './types';

const PermissionModal: FC<PermissionModalProps> = ({ openSettings }) => {
  const actualTheme = useThemeStore(state => state.theme);
  const theme = useTheme() as ThemeOverride;
  const [isModalVisible, setIsModalVisible] = usePermissionModalStore(
    state => [state.isModalVisible, state.setIsModalVisible],
    shallow,
  );
  const { modalContainerStyle } = styles({
    theme,
    actualTheme,
  });

  return (
    <Portal>
      <Modal
        visible={isModalVisible}
        onDismiss={(): void => {
          setIsModalVisible(false);
        }}
        contentContainerStyle={modalContainerStyle}
      >
        <CloseIcon
          size={24}
          color={theme.dark ? theme.colors.outline : theme.colors.secondary}
          name="x"
          onPress={(): void => {
            setIsModalVisible(false);
          }}
        />
        <Content>
          <MaterialCommunityIcons
            name="alert-outline"
            size={60}
            color={theme.colors.yellow.primary}
          />
          <ConfirmText size={16} font="secondary" weight="regular">
            {
              'A permissão para acesso à galeria\n foi negada. Por favor, conceda essa permissão para que seja possível \ncolocar uma foto de perfil.'
            }
          </ConfirmText>
          <ButtonContainer>
            <ConfirmButton
              mode="contained"
              onPress={openSettings}
              buttonColor={theme.colors.primary}
            >
              <Text
                font="secondary"
                weight="regular"
                color={theme.colors.onPrimary}
                size={14}
              >
                Permitir
              </Text>
            </ConfirmButton>
          </ButtonContainer>
        </Content>
      </Modal>
    </Portal>
  );
};

export default PermissionModal;
