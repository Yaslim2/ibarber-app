import { Platform } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { MD3Typescale } from 'react-native-paper/src/types';

const fonts: Record<string, MD3Typescale> = {};

const fontSemiBold = Platform.select({
  ios: 'Elza-SemiBold',
  android: 'Elza-SemiBold',
  default: 'Elza-SemiBold',
});

const fontBold = Platform.select({
  ios: 'Elza-Bold',
  android: 'Elza-Bold',
  default: 'Elza-Bold',
});

const fontRegular = Platform.select({
  ios: 'Elza-Regular',
  android: 'Elza-Regular',
  default: 'Elza-Regular',
});

Object.keys(DefaultTheme.fonts).forEach(key => {
  fonts[key] = {
    ...DefaultTheme.fonts[key],
    letterSpacing: 0.6,
    fontFamily: fontRegular,
  };
});

const combinedFonts: Partial<MD3Typescale> = {
  // large
  displayLarge: {
    ...DefaultTheme.fonts.displayLarge,
    fontFamily: fontBold,
    fontWeight: '600',
  },
  headlineLarge: {
    ...DefaultTheme.fonts.headlineLarge,
    fontFamily: fontBold,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  titleLarge: {
    ...DefaultTheme.fonts.titleLarge,
    fontFamily: fontBold,
    fontWeight: '600',
  },
  // medium
  displayMedium: {
    ...DefaultTheme.fonts.displayMedium,
    fontFamily: fontSemiBold,
    fontWeight: '600',
  },
  headlineMedium: {
    ...DefaultTheme.fonts.headlineMedium,
    fontFamily: fontSemiBold,
    fontWeight: '600',
  },
  titleMedium: {
    ...DefaultTheme.fonts.titleMedium,
    fontFamily: fontSemiBold,
    fontWeight: '600',
  },
  // small
  displaySmall: {
    ...DefaultTheme.fonts.displaySmall,
    fontFamily: fontBold,
    lineHeight: 40,
    letterSpacing: 0.6,
    fontWeight: '600',
  },
  headlineSmall: {
    ...DefaultTheme.fonts.headlineSmall,
    fontFamily: fontSemiBold,
    fontWeight: '600',
  },
  titleSmall: {
    ...DefaultTheme.fonts.titleSmall,
    fontFamily: fontSemiBold,
    fontWeight: '600',
  },
  // body
  bodyLarge: {
    ...DefaultTheme.fonts.bodyLarge,
    fontFamily: 'Elza-Medium',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  bodyMedium: {
    ...DefaultTheme.fonts.bodyMedium,
    fontFamily: fontRegular,
    fontWeight: '300',
  },
};

export default { ...DefaultTheme.fonts, ...fonts, ...combinedFonts };
