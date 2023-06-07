import React from 'react';
import { FormProvider } from 'react-hook-form';

import Button from '@/shared/components/Button';
import Text from '@/shared/components/Text';
import { ControlledTextInput } from '@/shared/components/TextInput';
import { ThemeOverride } from '@/shared/styles/theme';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import useController from './index.controller';
import { ContainerKeyboardAwareView, Content, TitleContainer } from './styles';

const SetUserInfo: SignUpStackTypes.ComponentProps<
  SignUpStackTypes.Routes.SetUserInfo
> = props => {
  const theme = useTheme() as ThemeOverride;
  const { methods } = useController(props);

  return (
    <ContainerKeyboardAwareView
      enableAutomaticScroll={true}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <Content>
        <TitleContainer>
          <Text size={35} font="primary" weight="bold">
            {'Olá!'}
          </Text>
          <Text size={20} font="primary" weight="light">
            {'Precisamos de suas informações\npara continuar com seu cadastro'}
          </Text>
        </TitleContainer>
        <FormProvider {...methods}>
          <ControlledTextInput
            label="Nome completo"
            name="fullname"
            autoCapitalize="words"
            keyboardType="default"
          />
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
          <ControlledTextInput
            name="passwordConfirmation"
            autoCapitalize="none"
            label="Confirmar senha"
            secureTextEntry={true}
          />
        </FormProvider>
        <Button
          disabled={!methods.formState.isValid}
          buttonColor={theme.colors.primary}
        >
          Avançar
        </Button>
      </Content>
    </ContainerKeyboardAwareView>
  );
};

export default SetUserInfo;
