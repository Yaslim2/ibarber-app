import React from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';

import BoardingThreeSvg from '@/assets/svg/boarding-three.svg';
import ButtonBoardingFullPercent from '@/assets/svg/button-boarding-full-percent.svg';
import colors from '@/shared/styles/colors';
import { ThemeOverride } from '@/shared/styles/theme';
import { OnboardingStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import useController from './index.controller';
import {
  Container,
  Content,
  NextPageContainer,
  NextPageButton,
  TextTitle,
  TextSubtitle,
  BlankView,
  CenterView,
} from './styles';

const BoardingThree: OnboardingStackTypes.ComponentProps<
  OnboardingStackTypes.Routes.BoardingThree
> = props => {
  const theme = useTheme() as ThemeOverride;

  const { handleNextPage } = useController(props);

  return (
    <Container>
      <Content>
        <BlankView />
        <BlankView />
        <CenterView>
          <BoardingThreeSvg />
          <TextTitle font="secondary" weight="bold">
            {'Tudo que você precisa para suas necessidades'}
          </TextTitle>
          <TextSubtitle
            font="secondary"
            weight="regular"
            color={theme.colors.darkGrey.primary}
          >
            {
              'Sinta-se à vontade para fazer o agendamento e aguardar sua vez com o iBarber'
            }
          </TextSubtitle>
        </CenterView>
        <NextPageContainer>
          <PaginationDot
            inactiveDotColor={colors.grey.tertiary}
            activeDotColor={colors.orange.primary}
            curPage={2}
            maxPage={3}
          />

          <NextPageButton onPress={handleNextPage}>
            <ButtonBoardingFullPercent />
          </NextPageButton>
        </NextPageContainer>
      </Content>
    </Container>
  );
};

export default BoardingThree;
