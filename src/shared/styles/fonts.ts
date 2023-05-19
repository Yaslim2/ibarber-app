import { Platform } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { MD3Typescale } from 'react-native-paper/src/types';

const fonts: Record<string, MD3Typescale> = {};

const fontSemiBold = Platform.select({
  ios: 'DM-Sans-Medium',
  android: 'DM-Sans-Medium',
  default: 'DM-Sans-Medium',
});

const fontBold = Platform.select({
  ios: 'DM-Sans-Bold',
  android: 'DM-Sans-Bold',
  default: 'DM-Sans-Bold',
});

const fontRegular = Platform.select({
  ios: 'DM-Sans-Regular',
  android: 'DM-Sans-Regular',
  default: 'DM-Sans-Regular',
});

Object.keys(DefaultTheme.fonts).forEach(key => {
  fonts[key] = {
    ...DefaultTheme.fonts[key],
    letterSpacing: 0.6,
    fontFamily: fontRegular,
  };
});

const combinedFonts: Partial<MD3Typescale> = {
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
