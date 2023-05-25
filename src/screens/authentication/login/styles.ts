import { marginStatusBar } from '@/shared/constants';
import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const Container = styled.View<{ theme: ThemeOverride }>`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-top: ${marginStatusBar};
  margin-left: 20px;
  margin-right: 20px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FormContainer = styled.View`
  width: 100%;
  gap: 10px;
  align-items: center;
`;

export const BlankView = styled.View``;
