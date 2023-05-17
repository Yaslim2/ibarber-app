import React, { FC } from 'react';
import { Text, View } from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';

import BoardingOne from '@/assets/svg/boarding-one.svg';
import ButtonBoardingHalfPercent from '@/assets/svg/button-boarding-half-percent.svg';

import useController from 'src/screens/onboarding/index.controller';

import {
  Container,
  ContentContainer,
  Content,
  NextPageContainer,
  NextPageButton,
} from './styles';

const Boarding: FC = () => {
  const { boardingTexts, currentBoard, setCurrentBoard } = useController();

  return (
    <Container>
      <ContentContainer>
        <View />
        <Content>
          <View />
          <View>
            <BoardingOne />
            <Text>{boardingTexts.BoardingOne.title}</Text>
            <Text>{boardingTexts.BoardingOne.subtitle}</Text>
          </View>

          <NextPageContainer>
            <PaginationDot
              inactiveDotColor="#868282c1"
              activeDotColor="#FE9034"
              curPage={currentBoard}
              maxPage={3}
            />
            <NextPageButton
              onPress={() => {
                setCurrentBoard(currentBoard + 1);
              }}
            >
              <ButtonBoardingHalfPercent />
            </NextPageButton>
          </NextPageContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Boarding;
