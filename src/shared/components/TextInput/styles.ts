import { TextInput as NativeInput } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const InputContainer = styled.View`
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
`;

export const Input = styled(TextInput)`
  height: 56px;
  border-color: ${props => props.theme.colors.primary};
  border-width: 1.5;
  border-radius: 8;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
  overflow: hidden;
  background-color: transparent;
`;

export const NativeTextInput = styled(NativeInput)`
  padding-top: 8px;
  padding-bottom: 8px;
  height: 100px;
  width: 100%;
`;

export const LabelText = styled(Text)<{ theme: ThemeOverride }>`
  color: ${props =>
    props.theme.dark
      ? props.theme.colors.outline
      : props.theme.colors.grey.secondary};
  font-family: ${props => props.theme.fonts.secondary.bold};
`;
