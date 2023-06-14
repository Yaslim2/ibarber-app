import React, { FC } from 'react';
import { View } from 'react-native';
import { Modal, Portal, Button } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Text from '@/shared/components/Text';
import useConfirmPhoneNumberModalStore from '@/shared/store/confirm-phone-number-modal';
import useThemeStore from '@/shared/store/theme';
import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';
import { shallow } from 'zustand/shallow';

import styles from './styles';
import { ConfirmPhoneNumberModalProps } from './types';

const ConfirmPhoneNumberModal: FC<ConfirmPhoneNumberModalProps> = ({
  confirmPhoneNumber,
  isLoading,
  phoneNumber,
}) => {
  const actualTheme = useThemeStore(state => state.theme);
  const theme = useTheme() as ThemeOverride;
  const [isModalVisible, setIsModalVisible] = useConfirmPhoneNumberModalStore(
    state => [state.isModalVisible, state.setIsModalVisible],
    shallow,
  );
  const {
    closeIcon,
    modalContainerStyle,
    content,
    buttonContainer,
    confirmText,
    button,
    cancelText,
    deleteText,
    deleteButton,
  } = styles({
    theme,
    actualTheme,
  });

  return (
    <Portal>
      <Modal
        visible={isModalVisible}
        onDismiss={(): void => {
          !isLoading ? setIsModalVisible(false) : null;
        }}
        contentContainerStyle={modalContainerStyle}
      >
        <FeatherIcon
          size={24}
          color={closeIcon.color}
          name="x"
          style={closeIcon}
          onPress={(): void => {
            !isLoading ? setIsModalVisible(false) : null;
          }}
        />
        <View style={content}>
          <Text font="secondary" weight="regular" style={confirmText}>
            {`Tem certeza de que seu telefone é: \n${phoneNumber}?\nEnviaremos um código de \nconfirmação a você via SMS.`}
          </Text>
          <View style={buttonContainer}>
            <Button
              disabled={isLoading}
              mode="outlined"
              onPress={(): void => {
                !isLoading ? setIsModalVisible(false) : null;
              }}
              style={button}
            >
              <Text font="secondary" weight="regular" style={cancelText}>
                Cancelar
              </Text>
            </Button>
            <Button
              disabled={isLoading}
              loading={isLoading}
              mode="contained"
              onPress={async () => {
                await confirmPhoneNumber();
              }}
              buttonColor={theme.colors.primary}
              style={deleteButton}
            >
              <Text font="secondary" weight="regular" style={deleteText}>
                Confirmar
              </Text>
            </Button>
            <View />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ConfirmPhoneNumberModal;
