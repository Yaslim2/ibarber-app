import React from 'react';
import { FormProvider } from 'react-hook-form';

import Button from '@/shared/components/Button';
import PhoneInput from '@/shared/components/PhoneInput';
import Text from '@/shared/components/Text';
import { ThemeOverride } from '@/shared/styles/theme';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

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
          <Text size={20} font="primary" weight="light">
            {
              'Para sua segurança, iremos vincular o seu número de telefone à sua conta'
            }
          </Text>
        </TitleContainer>
        <FormProvider {...methods}>
          <PhoneInput
            name="phoneNumber"
            autoCapitalize="none"
            label="Número de telefone"
            keyboardType="phone-pad"
            error={Boolean(methods.formState.errors.phoneNumber)}
          />
        </FormProvider>
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
