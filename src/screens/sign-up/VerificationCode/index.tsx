import React, { useState } from 'react';

import Button from '@/shared/components/Button';
import CodeInput from '@/shared/components/CodeInput';
import Text from '@/shared/components/Text';
import { ThemeOverride } from '@/shared/styles/theme';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import useController from './index.controller';
import {
  ContainerKeyboardAwareView,
  Content,
  TitleContainer,
  textAlign,
} from './styles';

const VerificationCode: SignUpStackTypes.ComponentProps<
  SignUpStackTypes.Routes.VerificationCode
> = props => {
  const theme = useTheme() as ThemeOverride;
  const [value, setValue] = useState<string>('');
  const { isLoading, handleNext } = useController(props);

  return (
    <ContainerKeyboardAwareView
      enableAutomaticScroll={true}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <Content>
        <TitleContainer>
          <Text style={textAlign} size={20} font="primary" weight="light">
            {'Um código de segurança\nfoi enviado ao número\n+5585992537717\n'}
          </Text>
        </TitleContainer>
        <CodeInput cellCount={4} setValue={setValue} value={value} />
        <Button
          loading={isLoading}
          onPress={handleNext}
          disabled={true}
          buttonColor={theme.colors.primary}
        >
          Avançar
        </Button>
      </Content>
    </ContainerKeyboardAwareView>
  );
};

export default VerificationCode;
