import { StyleSheet } from 'react-native';

import { ThemeOverride } from '@/shared/styles/theme';

import styled from 'styled-components/native';

export const styles = (
  theme: ThemeOverride,
  isFocus?: boolean,
  isError?: boolean,
) => {
  let borderColor = theme.dark ? theme.colors.secondary : theme.colors.outline;

  if (isError) {
    borderColor = theme.colors.error;
  } else if (isFocus) {
    borderColor = theme.colors.primary;
  }

  return StyleSheet.create({
    pickerTitleStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      fontFamily: 'Sk-Modernist-Bold',
    },
    containerStyle: {
      width: '30%',
      borderWidth: 1.5,
      borderRadius: 8,
      borderTopRightRadius: 0,
      marginRight: -5,
      borderBottomRightRadius: 0,
      alignItems: 'center',
      borderColor,
    },
    selectedCountryTextStyle: {
      paddingLeft: 5,
      color: theme.colors.white.primary,
      fontFamily: 'Sk-Modernist',
    },
    countryNameTextStyle: {
      color: '#000',
      textAlign: 'left',
      fontFamily: 'Sk-Modernist',
    },
    searchBarStyle: {
      flex: 1,
      fontFamily: 'Sk-Modernist',
    },
    customTextInputStyle: {
      width: '71%',
      borderLeftWidth: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    dropDownImageStyle: {
      tintColor: theme.colors.white.primary,
    },
  });
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;
