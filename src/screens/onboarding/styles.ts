import { ViewStyle } from 'react-native';

import { marginStatusBar } from '@/shared/constants';
import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView<{
  theme: ThemeOverride;
  routeName?: string;
}>`
  flex: 1;
  margin-top: ${marginStatusBar};
  margin-left: 20px;
  margin-right: 20px;
`;

export const StepBar = styled.View`
  gap: 30px;
`;

export const containerStyle: ViewStyle = {
  zIndex: 999,
  position: 'absolute',
};

export const switchStyle: ViewStyle = {
  right: 0,
};
