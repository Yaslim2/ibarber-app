import { useEffect, useState } from 'react';
import React from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';

import useThemeSelectorProvider from '@/shared/providers/theme';
import MainStack from '@/shared/routes';
import { MainStackTypes } from '@/shared/types/navigation';

import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const { currentTheme, navigationTheme } = useThemeSelectorProvider();
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);
  const handleLoadFonts = async () => {
    await Font.loadAsync({
      'Sk-Modernist': require('@/assets/fonts/Sk-Modernist-Regular.otf'),
      'Sk-Modernist-Bold': require('@/assets/fonts/Sk-Modernist-Bold.otf'),
      'Sk-Modernist-Light': require('@/assets/fonts/Sk-Modernist-Light.ttf'),
      'DM-Sans-Bold': require('@/assets/fonts/DMSans-Bold.ttf'),
      'DM-Sans-Medium': require('@/assets/fonts/DMSans-Medium.ttf'),
      'DM-Sans-Regular': require('@/assets/fonts/DMSans-Regular.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    handleLoadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <PaperProvider>
        <NavigationContainer theme={navigationTheme}>
          <MainStack initialRouteName={MainStackTypes.Routes.Onboarding} />
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}
