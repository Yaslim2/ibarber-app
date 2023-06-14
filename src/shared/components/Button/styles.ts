import { StyleSheet, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

import styled from 'styled-components/native';

export const contentStyle: ViewStyle = {
  maxHeight: 56,
  minHeight: 56,
  width: '100%',
  borderRadius: 8,
};

export const ButtonPaper = styled(Button)`
  border-radius: 8px;
  width: 100%;
`;

export const styles = StyleSheet.create({
  labelStyle: { fontFamily: 'Sk-Modernist-Bold' },
});
