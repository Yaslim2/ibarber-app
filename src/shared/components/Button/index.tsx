import React, { FC } from 'react';

import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import { ButtonPaper, contentStyle, labelStyle } from './styles';
import { CustomButtonProps } from './types';

const Button: FC<CustomButtonProps> = props => {
  const theme = useTheme() as ThemeOverride;

  return (
    <ButtonPaper
      {...props}
      mode="contained"
      dark={theme.dark}
      contentStyle={props.contentStyle || contentStyle}
      labelStyle={props.labelStyle || labelStyle}
    >
      {props.children}
    </ButtonPaper>
  );
};

export default Button;
