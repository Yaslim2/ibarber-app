import { marginStatusBar } from '@/shared/constants';
import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const Container = styled.View<{ theme: ThemeOverride }>`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-top: ${marginStatusBar};
  margin-left: 20px;
  margin-right: 20px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const NextPageContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const NextPageButton = styled.TouchableOpacity`
  margin-top: 35px;
`;

export const TextTitle = styled.Text<{ theme: ThemeOverride }>`
  font-family: Sk-Modernist-Bold;
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.onBackground};
  margin-top: 20px;
`;

export const TextSubtitle = styled.Text<{ theme: ThemeOverride }>`
  font-family: Sk-Modernist;
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.colors.darkGrey};
  margin-top: 20px;
`;

export const BlankView = styled.View``;

export const CenterView = styled.View`
  align-items: center;
`;
