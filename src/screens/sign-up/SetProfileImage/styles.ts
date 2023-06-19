import { TextStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const FormContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleContainer = styled.View`
  margin-bottom: 10px;
`;

export const ContainerKeyboardAwareView = styled(KeyboardAwareScrollView)`
  flex: 1;
  margin-top: 20px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;

export const textAlign: TextStyle = {
  textAlign: 'center',
};

export const ResendSmsContainer = styled.TouchableOpacity`
  width: 100%;
`;

export const SmsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Line = styled.View<{ theme: ThemeOverride }>`
  height: 1.6px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.colors.secondary};
`;
