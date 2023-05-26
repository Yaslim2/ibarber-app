import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import LogoDark from '@/assets/svg/logo-dark.svg';
import LogoWhite from '@/assets/svg/logo.svg';
import Button from '@/shared/components/Button';
import Text from '@/shared/components/Text';
import { ControlledTextInput } from '@/shared/components/TextInput';
import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import AppleIcon from './components/AppleIcon';
import EmailIcon from './components/EmailIcon';
import GoogleIcon from './components/GoogleIcon';
import {
  ContainerKeyboardAwareView,
  Content,
  ContentContainer,
  DividerContainer,
  FormContainer,
  buttonStyle,
  Line,
  ContainerButton,
} from './styles';

const Login: FC = () => {
  const theme = useTheme() as ThemeOverride;
  const { ...methods } = useForm({
    // resolver: yupResolver(formValidationSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  return (
    <ContainerKeyboardAwareView
      enableAutomaticScroll={true}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <ContentContainer>
        <Content>
          <FormContainer>
            {theme.dark ? <LogoDark /> : <LogoWhite />}
            <FormProvider {...methods}>
              <ControlledTextInput
                label="E-mail"
                name="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <ControlledTextInput
                name="password"
                autoCapitalize="none"
                label="Senha"
                secureTextEntry={true}
              />
            </FormProvider>
          </FormContainer>
          <Button
            mode="contained"
            buttonColor={theme.colors.primary}
            icon={EmailIcon}
          >
            Iniciar sessão
          </Button>
          <DividerContainer>
            <Line />
            <Text font="secondary" weight="bold">
              ou
            </Text>
            <Line />
          </DividerContainer>
          <ContainerButton>
            <Button
              buttonColor={theme.colors.primary}
              icon={GoogleIcon}
              style={buttonStyle}
            >
              Iniciar sessão
            </Button>
            <Button
              buttonColor={theme.colors.primary}
              icon={AppleIcon}
              style={buttonStyle}
            >
              Iniciar sessão
            </Button>
          </ContainerButton>
        </Content>
      </ContentContainer>
    </ContainerKeyboardAwareView>
  );
};

export default Login;
