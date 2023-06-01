import React from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';

import BoardingOne from '@/assets/svg/boarding-one.svg';
import BoardingThree from '@/assets/svg/boarding-three.svg';
import BoardingTwo from '@/assets/svg/boarding-two.svg';
import ButtonBoardingFullPercent from '@/assets/svg/button-boarding-full-percent.svg';
import ButtonBoardingHalfPercent from '@/assets/svg/button-boarding-half-percent.svg';
import ButtonBoardingZeroPercent from '@/assets/svg/button-boarding-zero-percent.svg';
import LogoDark from '@/assets/svg/logo-dark.svg';
import LogoWhite from '@/assets/svg/logo.svg';
import useController from '@/screens/onboarding/index.controller';
import Button from '@/shared/components/Button';
import colors from '@/shared/styles/colors';
import { ThemeOverride } from '@/shared/styles/theme';
import { MainStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import {
  Container,
  ContentContainer,
  Content,
  NextPageContainer,
  NextPageButton,
  TextTitle,
  TextSubtitle,
  BlankView,
  CenterView,
  ButtonContainer,
} from './styles';

const Boarding: MainStackTypes.ComponentProps<
  MainStackTypes.Routes.Onboarding
> = props => {
  const theme = useTheme() as ThemeOverride;
  const { boardingTexts, currentBoard, currentPage, handleNextPage } =
    useController(props);

  return (
    <Container>
      <ContentContainer>
        <Content>
          {currentBoard !== 'GetStarted' && (
            <>
              <BlankView />
              <BlankView />
            </>
          )}
          <CenterView>
            {currentBoard === 'BoardingOne' ? (
              <BoardingOne />
            ) : currentBoard === 'BoardingTwo' ? (
              <BoardingTwo />
            ) : currentBoard === 'BoardingThree' ? (
              <BoardingThree />
            ) : theme.dark ? (
              <LogoDark />
            ) : (
              <LogoWhite />
            )}
            <TextTitle font="secondary" weight="bold">
              {boardingTexts[currentBoard].title}
            </TextTitle>
            <TextSubtitle
              font="secondary"
              weight="regular"
              color={theme.colors.darkGrey.primary}
            >
              {boardingTexts[currentBoard].subtitle}
            </TextSubtitle>
          </CenterView>
          <NextPageContainer>
            {currentBoard !== 'GetStarted' ? (
              <>
                <PaginationDot
                  inactiveDotColor={colors.grey.tertiary}
                  activeDotColor={colors.orange.primary}
                  curPage={currentPage}
                  maxPage={3}
                />

                <NextPageButton onPress={handleNextPage.bind(this, undefined)}>
                  {currentBoard === 'BoardingOne' ? (
                    <ButtonBoardingZeroPercent />
                  ) : currentBoard === 'BoardingTwo' ? (
                    <ButtonBoardingHalfPercent />
                  ) : (
                    <ButtonBoardingFullPercent />
                  )}
                </NextPageButton>
              </>
            ) : (
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
            )}
          </NextPageContainer>
          {currentBoard === 'GetStarted' && <BlankView />}
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Boarding;
