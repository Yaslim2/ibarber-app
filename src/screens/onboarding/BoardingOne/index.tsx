import React from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';

import BoardingOneSvg from '@/assets/svg/boarding-one.svg';
import ButtonBoardingZeroPercent from '@/assets/svg/button-boarding-zero-percent.svg';
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

const BoardingOne: OnboardingStackTypes.ComponentProps<
  OnboardingStackTypes.Routes.BoardingOne
> = props => {
  const theme = useTheme() as ThemeOverride;

  const { handleNextPage } = useController(props);

  return (
    <Container>
      <Content>
        <BlankView />
        <BlankView />
        <CenterView>
          <BoardingOneSvg />
          <TextTitle font="secondary" weight="bold">
            {'Encontre a melhor barbearia\nnas proximidades'}
          </TextTitle>
          <TextSubtitle
            font="secondary"
            weight="regular"
            color={theme.colors.darkGrey.primary}
          >
            {
              'Pesquise facilmente suas melhores e favoritas barbearias em qualquer lugar próximo'
            }
          </TextSubtitle>
        </CenterView>
        <NextPageContainer>
          <PaginationDot
            inactiveDotColor={colors.grey.tertiary}
            activeDotColor={colors.orange.primary}
            curPage={0}
            maxPage={3}
          />

          <NextPageButton onPress={handleNextPage}>
            <ButtonBoardingZeroPercent />
          </NextPageButton>
        </NextPageContainer>
      </Content>
    </Container>
  );
};

export default BoardingOne;
