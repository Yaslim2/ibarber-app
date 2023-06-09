import React from 'react';
import { FormProvider } from 'react-hook-form';

import LogoDark from '@/assets/svg/logo-dark.svg';
import LogoWhite from '@/assets/svg/logo.svg';
import BackButton from '@/shared/components/BackButton';
import Button from '@/shared/components/Button';
import Text from '@/shared/components/Text';
import { ControlledTextInput } from '@/shared/components/TextInput';
import { ThemeOverride } from '@/shared/styles/theme';
import { MainStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import AppleIcon from './components/AppleIcon';
import EmailIcon from './components/EmailIcon';
import GoogleIcon from './components/GoogleIcon';
import useController from './index.controller';
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

const Login: MainStackTypes.ComponentProps<
  MainStackTypes.Routes.Login
> = props => {
  const theme = useTheme() as ThemeOverride;
  const { methods, goBack } = useController(props);

  return (
    <ContainerKeyboardAwareView
      enableAutomaticScroll={true}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <ContentContainer>
        <BackButton onPress={goBack} iconName="close" />
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
          <Button buttonColor={theme.colors.primary} icon={EmailIcon}>
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
          <Text
            underline
            color={
              theme.dark ? theme.colors.outline : theme.colors.grey.secondary
            }
            font="secondary"
            weight="medium"
          >
            Esqueceu sua senha?
          </Text>
        </Content>
      </ContentContainer>
    </ContainerKeyboardAwareView>
  );
};

export default Login;
