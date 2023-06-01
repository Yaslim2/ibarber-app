import Text from '@/shared/components/Text';
import { marginStatusBar } from '@/shared/constants';
import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const Container = styled.View<{ theme: ThemeOverride }>`
  flex: 1;
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
  margin-bottom: 20px;
`;

export const NextPageContainer = styled.View`
  width: 100%;
  align-items: center;
  border-top-left-radius: 8px;
  background-color: #fff;
`;

export const NextPageButton = styled.TouchableOpacity`
  margin-top: 35px;
`;

export const TextTitle = styled(Text)`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

export const TextSubtitle = styled(Text)`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
`;

export const BlankView = styled.View``;

export const CenterView = styled.View`
  align-items: center;
`;

export const ButtonContainer = styled.View`
  gap: 15px;
  width: 100%;
`;
