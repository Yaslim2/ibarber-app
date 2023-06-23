import { StyleSheet } from 'react-native';

import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

const styles = (theme: ThemeOverride) =>
  StyleSheet.create({
    buttonContainerStyle: {
      backgroundColor: theme.colors.primary,
      borderRadius: 175,
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '65%',
      top: '5%',
    },
  });

export const ImageStyled = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 175px;
`;

export const ContainerImage = styled.View<{ theme: ThemeOverride }>`
  align-self: center;
  margin-bottom: 32px;
  border-style: solid;
  border-width: 6px;
  border-color: ${props =>
    props.theme.dark
      ? props.theme.colors.onPrimary
      : props.theme.colors.primary};
  border-radius: 200px;
  margin-top: 8px;
`;

export const Container = styled.View``;

export default styles;
