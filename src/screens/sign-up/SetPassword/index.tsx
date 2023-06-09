import React from 'react';
import { FormProvider } from 'react-hook-form';

import Button from '@/shared/components/Button';
import Text from '@/shared/components/Text';
import { ControlledTextInput } from '@/shared/components/TextInput';
import { ThemeOverride } from '@/shared/styles/theme';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import ValidPassword from './components/valid-password';
import useController from './index.controller';
import { ContainerKeyboardAwareView, Content, TitleContainer } from './styles';

const SetPassword: SignUpStackTypes.ComponentProps<
  SignUpStackTypes.Routes.SetPassword
> = props => {
  const theme = useTheme() as ThemeOverride;
  const { methods, isLoading, handleNext } = useController(props);

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
            {
              'Temos algumas regras específicas para deixar a sua senha mais segura'
            }
          </Text>
        </TitleContainer>
        <FormProvider {...methods}>
          <ControlledTextInput
            name="password"
            autoCapitalize="none"
            label="Senha"
            error={Boolean(methods.formState.errors.password)}
            secureTextEntry={true}
          />
          <ControlledTextInput
            name="passwordConfirmation"
            autoCapitalize="none"
            error={Boolean(methods.formState.errors.passwordConfirmation)}
            label="Confirmar senha"
            secureTextEntry={true}
          />
        </FormProvider>
        <ValidPassword
          password={methods.watch('password')}
          confirmPassword={methods.watch('passwordConfirmation')}
        />
        <Button
          loading={isLoading}
          onPress={methods.handleSubmit(handleNext)}
          disabled={!methods.formState.isValid}
          buttonColor={theme.colors.primary}
        >
          Avançar
        </Button>
      </Content>
    </ContainerKeyboardAwareView>
  );
};

export default SetPassword;
