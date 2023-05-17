import { marginStatusBar } from '@/shared/constants';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
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

export const TextTitle = styled.Text`
  font-family: Sk-Modernist-Bold;
  font-size: 20px;
  text-align: center;
  color: #3b3b3b;
  margin-top: 20px;
`;

export const TextSubtitle = styled.Text`
  font-family: Sk-Modernist;
  font-size: 14px;
  text-align: center;
  color: #8f8f8f;
  margin-top: 20px;
`;

export const BlankView = styled.View``;

export const CenterView = styled.View`
  align-items: center;
`;
