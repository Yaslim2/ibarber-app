import React from 'react';

import LogoDark from '@/assets/svg/logo-dark.svg';
import LogoWhite from '@/assets/svg/logo.svg';
import Button from '@/shared/components/Button';
import { ThemeOverride } from '@/shared/styles/theme';
import { OnboardingStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import useController from './index.controller';
import {
  Container,
  Content,
  NextPageContainer,
  TextTitle,
  TextSubtitle,
  BlankView,
  CenterView,
  ButtonContainer,
} from './styles';

const GetStarted: OnboardingStackTypes.ComponentProps<
  OnboardingStackTypes.Routes.GetStarted
> = props => {
  const { handleNextPage } = useController(props);

  const theme = useTheme() as ThemeOverride;

  return (
    <Container>
      <Content>
        <CenterView>
          {theme.dark ? <LogoDark /> : <LogoWhite />}
          <TextTitle font="secondary" weight="bold">
            {'Pronto para começar?'}
          </TextTitle>
          <TextSubtitle
            font="secondary"
            weight="regular"
            color={theme.colors.darkGrey.primary}
          >
            {
              'Cadastre-se ou entre em sua conta para aproveitar os benefícios do iBarber.'
            }
          </TextSubtitle>
        </CenterView>
        <NextPageContainer>
          <ButtonContainer>
            <Button
              onPress={handleNextPage.bind(this, 'Login')}
              buttonColor={theme.colors.primary}
            >
              Iniciar sessão
            </Button>
            <Button
              onPress={handleNextPage.bind(this, 'SignUp')}
              mode="outlined"
              textColor={theme.colors.white.primary}
            >
              Criar uma conta
            </Button>
          </ButtonContainer>
        </NextPageContainer>
        <BlankView />
      </Content>
    </Container>
  );
};

export default GetStarted;
