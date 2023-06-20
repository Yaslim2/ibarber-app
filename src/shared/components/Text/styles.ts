import { Text } from 'react-native-paper';

import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const CustomText = styled(Text)<{
  font: 'primary' | 'secondary';
  weight: 'light' | 'regular' | 'medium' | 'bold';
  theme: ThemeOverride;
  underline?: boolean;
  color?: string;
  size?: string;
  italic?: boolean;
}>`
  color: ${props => props.color || props.theme.colors.onBackground};
  font-family: ${props => props.theme.fonts[props.font][props.weight]};
  text-decoration-line: ${props => (props.underline ? 'underline' : 'none')};
  font-size: ${props => (props.size ? props.size : '12px')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`;
