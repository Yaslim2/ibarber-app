import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import LogoDark from '@/assets/svg/logo-dark.svg';
import LogoWhite from '@/assets/svg/logo.svg';
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
  FormContainer,
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
            dark={theme.dark}
            buttonColor={theme.colors.primary}
            contentStyle={{
              borderRadius: 8,
              width: '100%',
              maxHeight: 54,
              minHeight: 54,
            }}
            style={{
              borderRadius: 8,
              width: '100%',
            }}
            icon={EmailIcon}
            onPress={() => console.log('Pressed')}
          >
            Iniciar sessão
          </Button>
          <View style={{ width: '100%', flexDirection: 'row', gap: 19 }}>
            <Button
              mode="contained"
              dark={theme.dark}
              buttonColor={theme.colors.primary}
              contentStyle={{
                borderRadius: 8,
                maxHeight: 54,
                minHeight: 54,
              }}
              style={{
                borderRadius: 8,
                width: '47%',
              }}
              icon={GoogleIcon}
              onPress={() => console.log('Pressed')}
            >
              Iniciar sessão
            </Button>
            <Button
              mode="contained"
              dark={theme.dark}
              buttonColor={theme.colors.primary}
              contentStyle={{
                borderRadius: 8,
                maxHeight: 54,
                minHeight: 54,
              }}
              style={{
                borderRadius: 8,
                width: '47%',
              }}
              icon={AppleIcon}
              onPress={() => console.log('Pressed')}
            >
              Iniciar sessão
            </Button>
          </View>
        </Content>
      </ContentContainer>
    </ContainerKeyboardAwareView>
  );
};

export default Login;
