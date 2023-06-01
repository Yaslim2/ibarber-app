import React, { FC } from 'react';
import { DefaultTheme, MD3Theme } from 'react-native-paper';

import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import { ButtonPaper, contentStyle, labelStyle } from './styles';
import { CustomButtonProps } from './types';

const Button: FC<CustomButtonProps> = props => {
  const theme = useTheme() as ThemeOverride;

  const themePaper: MD3Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      outline: theme.colors.white.primary,
    },
    fonts: {
      ...DefaultTheme.fonts,
    },
  };

  return (
    <ButtonPaper
      {...props}
      mode={props.mode || 'contained'}
      theme={themePaper}
      dark={theme.dark}
      contentStyle={props.contentStyle || contentStyle}
      labelStyle={props.labelStyle || labelStyle}
    >
      {props.children}
    </ButtonPaper>
  );
};

export default Button;
