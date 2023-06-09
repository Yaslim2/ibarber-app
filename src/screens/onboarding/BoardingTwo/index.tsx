import React from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';

import BoardingTwoSvg from '@/assets/svg/boarding-two.svg';
import ButtonBoardingHalfPercent from '@/assets/svg/button-boarding-half-percent.svg';
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

const BoardingTwo: OnboardingStackTypes.ComponentProps<
  OnboardingStackTypes.Routes.BoardingTwo
> = props => {
  const theme = useTheme() as ThemeOverride;

  const { handleNextPage } = useController(props);

  return (
    <Container>
      <Content>
        <BlankView />
        <BlankView />
        <CenterView>
          <BoardingTwoSvg />
          <TextTitle font="secondary" weight="bold">
            {'Não precisa aguardar em filas chatas, é só ficar em casa'}
          </TextTitle>
          <TextSubtitle
            font="secondary"
            weight="regular"
            color={theme.colors.darkGrey.primary}
          >
            {
              'Aguardando sua vez confortavelmente em casa e informaremos sobre sua vez'
            }
          </TextSubtitle>
        </CenterView>
        <NextPageContainer>
          <PaginationDot
            inactiveDotColor={colors.grey.tertiary}
            activeDotColor={colors.orange.primary}
            curPage={1}
            maxPage={3}
          />
          <NextPageButton onPress={handleNextPage}>
            <ButtonBoardingHalfPercent />
          </NextPageButton>
        </NextPageContainer>
      </Content>
    </Container>
  );
};

export default BoardingTwo;
