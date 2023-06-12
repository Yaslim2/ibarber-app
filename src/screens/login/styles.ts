import { ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { marginStatusBar } from '@/shared/constants';
import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const ContainerKeyboardAwareView = styled(KeyboardAwareScrollView)`
  flex: 1;
`;

export const ContentContainer = styled.ScrollView`
  flex: 1;
  margin-top: ${marginStatusBar};
  margin-left: 20px;
  margin-right: 20px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FormContainer = styled.View`
  width: 100%;
  gap: 10px;
  align-items: center;
`;

export const BlankView = styled.View``;

export const buttonStyle: ViewStyle = {
  borderRadius: 8,
  width: '47%',
};

export const DividerContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 19px;
`;

export const Line = styled.View<{ theme: ThemeOverride }>`
  height: 1.6px;
  width: 43%;
  background-color: ${props => props.theme.colors.secondary};
`;

export const containerStyle: ViewStyle = {
  zIndex: 999,
  position: 'absolute',
};

export const switchStyle: ViewStyle = {
  right: 0,
};
