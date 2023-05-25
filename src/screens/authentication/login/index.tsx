import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Logo from '@/assets/svg/logo.svg';
import { ControlledTextInput } from '@/shared/components/TextInput';
// import { ThemeOverride } from '@/shared/styles/theme';

// import { useTheme } from 'styled-components';

import { Container, Content, ContentContainer } from './styles';

const Login: FC = () => {
  const { ...methods } = useForm({
    // resolver: yupResolver(formValidationSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  return (
    <Container>
      <ContentContainer>
        <Content>
          <Logo />
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
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Login;
