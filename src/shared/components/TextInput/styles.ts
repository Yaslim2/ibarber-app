import { TextInput as NativeInput } from 'react-native';
import { TextInput } from 'react-native-paper';

import Text from 'src/shared/components/Text';
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
`;
