import { TextInput as NativeInput } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import styled from 'styled-components/native';

export const InputContainer = styled.View`
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
`;

export const Input = styled(TextInput)<{ borderColor: string }>`
  height: 56px;
  border-color: ${props => props.borderColor};
  border-width: 1.5px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  background-color: transparent;
  color: #fff;
`;

export const NativeTextInput = styled(NativeInput)`
  padding-top: 8px;
  padding-bottom: 8px;
  height: 100px;
  width: 100%;
`;

export const LabelText = styled(Text)`
  font-size: 15px;
  color: ${props =>
    props.theme.dark
      ? props.theme.colors.outline
      : props.theme.colors.grey.secondary};
  font-family: ${props => props.theme.fonts.secondary.regular};
`;
