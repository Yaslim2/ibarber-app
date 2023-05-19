import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import { Theme as ThemeNavigation } from '@react-navigation/native';

import useThemeStore from '@/shared/store/theme';
import { ThemesEnum } from '@/shared/store/theme/types';
import { ThemeOverride, darkTheme, lightTheme } from '@/shared/styles/theme';

import { shallow } from 'zustand/shallow';

export default function useThemeSelectorProvider(): {
  currentTheme: ThemeOverride;
  navigationTheme?: ThemeNavigation;
} {
  const scheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeOverride>(darkTheme);
  const [navigationTheme, setNavigationTheme] = useState<ThemeNavigation>();

  const [theme, setTheme] = useThemeStore(
    state => [state.theme, state.setTheme],
    shallow,
  );

  useEffect(() => {
    if (!theme && scheme) {
      setTheme(ThemesEnum[scheme]);
    }
  }, [scheme, theme, setTheme]);

  useEffect(
    () => setCurrentTheme(theme === ThemesEnum.dark ? darkTheme : lightTheme),
    [theme],
  );

  useEffect(() => {
    const colorsTransform = currentTheme.colors;

    setNavigationTheme({
      ...currentTheme,
      dark: theme === ThemesEnum.dark,
      colors: {
        background: colorsTransform?.background,
        border: colorsTransform?.onSurface,
        card: colorsTransform?.surface,
        notification: colorsTransform?.secondary,
        primary: colorsTransform.primary,
        text: colorsTransform.onBackground,
      },
    });
  }, [currentTheme, theme]);

  return { currentTheme, navigationTheme };
}
