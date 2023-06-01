import { Text } from 'react-native-paper';

import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const CustomText = styled(Text)<{
  font: 'primary' | 'secondary';
  weight: 'light' | 'regular' | 'medium' | 'bold';
  theme: ThemeOverride;
  underline?: boolean;
  color?: string;
}>`
  color: ${props => props.color || props.theme.colors.onBackground};
  font-family: ${props => props.theme.fonts[props.font][props.weight]};
  text-decoration-line: ${props => (props.underline ? 'underline' : 'none')};
`;
