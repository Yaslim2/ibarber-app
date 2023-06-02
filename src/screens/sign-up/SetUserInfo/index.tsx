import React from 'react';
import { FormProvider } from 'react-hook-form';

import Text from '@/shared/components/Text';
import { ControlledTextInput } from '@/shared/components/TextInput';
import { SignUpStackTypes } from '@/shared/types/navigation';

import useController from './index.controller';
import { ContainerKeyboardAwareView, Content } from './styles';

const SetUserInfo: SignUpStackTypes.ComponentProps<
  SignUpStackTypes.Routes.SetUserInfo
> = props => {
  const { methods } = useController(props);

  return (
    <ContainerKeyboardAwareView
      enableAutomaticScroll={true}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <Content>
        <Text
          style={{ fontSize: 17, textAlign: 'center' }}
          font="secondary"
          weight="bold"
        >
          Olá!{'\n'}Precisamos de algumas informações para realizar o seu
          cadastro.{' '}
        </Text>
        <FormProvider {...methods}>
          <ControlledTextInput
            label="Nome completo"
            name="fullname"
            autoCapitalize="words"
            keyboardType="email-address"
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
        </FormProvider>
      </Content>
    </ContainerKeyboardAwareView>
  );
};

export default SetUserInfo;
