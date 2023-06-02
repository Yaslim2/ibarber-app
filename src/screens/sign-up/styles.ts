import { marginStatusBar } from '@/shared/constants';
import { ThemeOverride } from '@/shared/styles/theme';
import { SignUpStackTypes } from '@/shared/types/navigation';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView<{
  theme: ThemeOverride;
  routeName?: string;
}>`
  flex: 1;
  background-color: ${props =>
    props.routeName !== SignUpStackTypes.Routes.Success || props.theme.dark
      ? props.theme.colors.background
      : props.theme.colors.primary};
  margin-top: ${marginStatusBar};
  margin-left: 20px;
  margin-right: 20px;
`;
