import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

import Logo from '@/assets/svg/logo.svg';
import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import { Container, Content, ContentContainer } from './styles';

const Login: FC = () => {
  const theme = useTheme() as ThemeOverride;

  return (
    <Container>
      <ContentContainer>
        <Content>
          <Logo />
          <View
            style={{
              borderRadius: 6,
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <TextInput
              underlineColor="transparent"
              underlineColorAndroid="transparent"
              outlineColor="transparent"
              activeOutlineColor="transparent"
              label={
                <Text
                  style={{
                    color: theme.dark
                      ? theme.colors.outline
                      : theme.colors.grey.secondary,
                    fontFamily: 'Sk-Modernist-Bold',
                  }}
                >
                  Email
                </Text>
              }
              style={{
                height: 56,
                borderColor: theme.colors.blue.primary,
                borderWidth: 1.5,
                borderBottomWidth: 0,
                borderRadius: 8,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                overflow: 'hidden',
                backgroundColor: 'transparent',
              }}
            />
          </View>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Login;
