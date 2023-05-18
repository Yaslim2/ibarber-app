import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

import colors from './colors';

const darkTheme = {
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
};

const lightTheme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...colors,
    ...MD3LightTheme,
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
};

export { darkTheme, lightTheme };
