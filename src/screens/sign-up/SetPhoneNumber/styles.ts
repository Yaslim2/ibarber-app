import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
