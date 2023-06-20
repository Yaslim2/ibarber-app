import React, { FC } from 'react';
import { View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';

import Text from '@/shared/components/Text';
import useConfirmPhoneNumberModalStore from '@/shared/store/confirm-phone-number-modal';
import useThemeStore from '@/shared/store/theme';
import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';
import { shallow } from 'zustand/shallow';

import styles, {
  ButtonContainer,
  CancelButton,
  CloseIcon,
  ConfirmButton,
  ConfirmText,
  Content,
} from './styles';
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
  const { modalContainerStyle } = styles({
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
        <CloseIcon
          size={24}
          color={theme.dark ? theme.colors.outline : theme.colors.secondary}
          name="x"
          onPress={(): void => {
            !isLoading ? setIsModalVisible(false) : null;
          }}
        />
        <Content>
          <ConfirmText size={16} font="secondary" weight="regular">
            {`Tem certeza de que seu telefone é: \n${phoneNumber}?\nEnviaremos um código de \nconfirmação a você via SMS.`}
          </ConfirmText>
          <ButtonContainer>
            <CancelButton
              disabled={isLoading}
              mode="outlined"
              onPress={(): void => {
                !isLoading ? setIsModalVisible(false) : null;
              }}
            >
              <Text
                font="secondary"
                weight="regular"
                size={14}
                color={
                  theme.dark ? theme.colors.white.primary : theme.colors.primary
                }
              >
                Cancelar
              </Text>
            </CancelButton>
            <ConfirmButton
              disabled={isLoading}
              loading={isLoading}
              mode="contained"
              onPress={async () => {
                await confirmPhoneNumber();
              }}
              buttonColor={theme.colors.primary}
            >
              <Text
                font="secondary"
                weight="regular"
                color={theme.colors.onPrimary}
                size={14}
              >
                Confirmar
              </Text>
            </ConfirmButton>
            <View />
          </ButtonContainer>
        </Content>
      </Modal>
    </Portal>
  );
};

export default ConfirmPhoneNumberModal;
