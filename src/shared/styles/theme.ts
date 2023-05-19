import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

import colors from './colors';
export interface ThemeOverride {
  colors: MD3Colors & typeof colors;
  fonts: {
    primary: {
      regular: string;
      medium: string;
      bold: string;
    };
    secondary: {
      regular: string;
      light: string;
      bold: string;
    };
  };
}

const darkTheme: ThemeOverride = {
  colors: {
    ...MD3DarkTheme.colors,
    ...colors,
    primary: colors.blue.primary,
    secondary: colors.lightGrey.secondary,
    tertiary: colors.dark.tertiary,
    surface: colors.dark.primary,
    surfaceVariant: colors.dark.secondary,
    background: colors.dark.primary,
    error: colors.red.secondary,
    onPrimary: colors.white.primary,
    onSecondary: colors.dark.primary,
    onSurface: colors.white.primary,
    onBackground: colors.white.secondary,
    outline: colors.dark.secondary,
  },
  fonts: {
    primary: {
      regular: 'DM-Sans-Regular',
      medium: 'DM-Sans-Medium',
      bold: 'DM-Sans-Bold',
    },
    secondary: {
      regular: 'Sk-Modernist',
      light: 'Sk-Modernist-Light',
      bold: 'Sk-Modernist-Bold',
    },
  },
};

const lightTheme: ThemeOverride = {
  colors: {
    ...colors,
    ...MD3LightTheme.colors,
    primary: colors.blue.primary,
    secondary: colors.lightGrey.primary,
    tertiary: colors.lightGrey.tertiary,
    surface: colors.white.primary,
    background: colors.white.primary,
    error: colors.red.primary,
    onPrimary: colors.white.primary,
    onSecondary: colors.white.primary,
    onSurface: colors.darkGrey.secondary,
    surfaceVariant: colors.white.secondary,
    onBackground: colors.dark.secondary,
    outline: colors.grey.primary,
  },
  fonts: {
    primary: {
      regular: 'DM-Sans-Regular',
      medium: 'DM-Sans-Medium',
      bold: 'DM-Sans-Bold',
    },
    secondary: {
      regular: 'Sk-Modernist',
      light: 'Sk-Modernist-Light',
      bold: 'Sk-Modernist-Bold',
    },
  },
};

export { darkTheme, lightTheme };
