import { ViewStyle } from 'react-native';

import Text from 'src/shared/components/Text';
import styled from 'styled-components/native';

export const Cell = styled(Text)`
  width: 60px;
  height: 60px;
  line-height: 55px;
  font-size: 27px;
  border-width: 1px;
  border-color: '#fff';
  text-align: 'center';
  border-radius: 8px;
  margin-left: 10px;
  font-family: ${props => props.theme.fonts.secondary.bold};
`;

export const rootStyle: ViewStyle = {
  height: 70,
  marginBottom: 10,
  paddingHorizontal: 20,
  justifyContent: 'center',
};
