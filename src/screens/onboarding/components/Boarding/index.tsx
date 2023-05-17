import React, { FC } from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';

import BoardingOne from '@/assets/svg/boarding-one.svg';
import BoardingThree from '@/assets/svg/boarding-three.svg';
import BoardingTwo from '@/assets/svg/boarding-two.svg';
import ButtonBoardingFullPercent from '@/assets/svg/button-boarding-full-percent.svg';
import ButtonBoardingHalfPercent from '@/assets/svg/button-boarding-half-percent.svg';
import ButtonBoardingZeroPercent from '@/assets/svg/button-boarding-zero-percent.svg';

import useController from 'src/screens/onboarding/index.controller';

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

const Boarding: FC = () => {
  const {
    boardingTexts,
    currentBoard,
    setCurrentBoard,
    currentPage,
    setCurrentPage,
  } = useController();

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
            <TextTitle>{boardingTexts[currentBoard].title}</TextTitle>
            <TextSubtitle>{boardingTexts[currentBoard].subtitle}</TextSubtitle>
          </CenterView>
          <NextPageContainer>
            <PaginationDot
              inactiveDotColor="#868282c1"
              activeDotColor="#FE9034"
              curPage={currentPage}
              maxPage={3}
            />

            <NextPageButton
              onPress={() => {
                setCurrentBoard(
                  currentBoard === 'BoardingOne'
                    ? 'BoardingTwo'
                    : currentBoard === 'BoardingTwo'
                    ? 'BoardingThree'
                    : 'BoardingOne',
                );
                setCurrentPage(currentPage + 1 === 3 ? 0 : currentPage + 1);
              }}
            >
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
