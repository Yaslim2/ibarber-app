import { MD3DarkTheme, MD3LightTheme, Theme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

import colors from './colors';
import fonts from './fonts';
export type ThemeOverride = Theme & {
  colors: MD3Colors & typeof colors;
  fonts: typeof fonts;
};

const darkTheme: ThemeOverride = {
  ...MD3DarkTheme,
  roundness: 2,
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
    onBackground: colors.white.primary,
    outline: colors.dark.secondary,
  },
  fonts: fonts,
};

const lightTheme: ThemeOverride = {
  ...MD3LightTheme,
  roundness: 2,
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
    onBackground: colors.darkGrey.secondary,
    outline: colors.grey.primary,
  },
  fonts: fonts,
};

export { darkTheme, lightTheme };
