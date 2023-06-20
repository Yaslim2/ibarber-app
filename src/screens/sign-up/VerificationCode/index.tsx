import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '@/shared/components/Button';
import CodeInput from '@/shared/components/CodeInput';
import Text from '@/shared/components/Text';
import { formatTime } from '@/shared/helpers/formatTime';
import { ThemeOverride } from '@/shared/styles/theme';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import useController from './index.controller';
import {
  ContainerIcon,
  ContainerKeyboardAwareView,
  Content,
  Line,
  ResendSmsContainer,
  SmsContainer,
  TitleContainer,
  textAlign,
} from './styles';

const VerificationCode: SignUpStackTypes.ComponentProps<
  SignUpStackTypes.Routes.VerificationCode
> = props => {
  const theme = useTheme() as ThemeOverride;
  const [value, setValue] = useState<string>('');
  const {
    isLoading,
    handleNext,
    remainingTime,
    handleStartCount,
    phoneNumber,
  } = useController(props);

  return (
    <ContainerKeyboardAwareView
      enableAutomaticScroll={true}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <Content>
        <TitleContainer>
          <Text style={textAlign} size={20} font="primary" weight="light">
            {'Um código de segurança\nfoi enviado ao número\n'}
            {phoneNumber}
            {'\n'}
          </Text>
        </TitleContainer>
        <CodeInput cellCount={4} setValue={setValue} value={value} />
        <ResendSmsContainer onPress={handleStartCount}>
          <SmsContainer>
            <ContainerIcon>
              <MaterialCommunityIcons
                size={26}
                name="message-processing"
                color={theme.colors.dark.secondary}
              />
              <Text size={13} font="secondary" weight="bold">
                Reenviar SMS
              </Text>
            </ContainerIcon>
            <Text
              color={theme.colors.grey.secondary}
              size={13}
              font="secondary"
              weight="bold"
            >
              {formatTime(remainingTime)}
            </Text>
          </SmsContainer>
          <Line />
        </ResendSmsContainer>
        <Button
          loading={isLoading}
          onPress={handleNext}
          disabled={value.length !== 4}
          buttonColor={theme.colors.primary}
        >
          Avançar
        </Button>
      </Content>
    </ContainerKeyboardAwareView>
  );
};

export default VerificationCode;
