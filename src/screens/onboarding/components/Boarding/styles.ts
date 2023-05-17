import { marginStatusBar } from '@/shared/constants';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-top: ${marginStatusBar};
  margin-left: 20;
  margin-right: 20;
`;

export const Content = styled.View`
  flex: 1;
  align-items: 'center';
  justify-content: 'space-between';
`;

export const NextPageContainer = styled.View`
  align-items: 'center';
  margin-bottom: 20;
`;

export const NextPageButton = styled.TouchableOpacity`
  margin-top: 35;
`;
