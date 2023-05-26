import React from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';

import BoardingOne from '@/assets/svg/boarding-one.svg';
import BoardingThree from '@/assets/svg/boarding-three.svg';
import BoardingTwo from '@/assets/svg/boarding-two.svg';
import ButtonBoardingFullPercent from '@/assets/svg/button-boarding-full-percent.svg';
import ButtonBoardingHalfPercent from '@/assets/svg/button-boarding-half-percent.svg';
import ButtonBoardingZeroPercent from '@/assets/svg/button-boarding-zero-percent.svg';
import useController from '@/screens/onboarding/index.controller';
import colors from '@/shared/styles/colors';
import { ThemeOverride } from '@/shared/styles/theme';
import { OnboardingStackTypes } from '@/shared/types/navigation';

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
} from './styles';

const Boarding: OnboardingStackTypes.ComponentsProps = props => {
  const theme = useTheme() as ThemeOverride;
  const { boardingTexts, currentBoard, currentPage, handleNextPage } =
    useController(props);

  return (
    <Container>
      <ContentContainer>
        <Content>
          <BlankView />
          <BlankView />
          <CenterView>
            {currentBoard === 'BoardingOne' ? (
              <BoardingOne />
            ) : currentBoard === 'BoardingTwo' ? (
              <BoardingTwo />
            ) : (
              <BoardingThree />
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
            <PaginationDot
              inactiveDotColor={colors.grey.tertiary}
              activeDotColor={colors.orange.primary}
              curPage={currentPage}
              maxPage={3}
            />

            <NextPageButton onPress={handleNextPage}>
              {currentBoard === 'BoardingOne' ? (
                <ButtonBoardingZeroPercent />
              ) : currentBoard === 'BoardingTwo' ? (
                <ButtonBoardingHalfPercent />
              ) : (
                <ButtonBoardingFullPercent />
              )}
            </NextPageButton>
          </NextPageContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Boarding;
