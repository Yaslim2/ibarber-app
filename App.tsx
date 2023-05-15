import { useEffect, useState } from 'react';
import React from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MainStack from '@/shared/routes';
import { MainStackTypes } from '@/shared/types/navigation';

import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);
  const handleLoadFonts = async () => {
    await Font.loadAsync({
      'Sk-Modernist': require('@/assets/fonts/Sk-Modernist-Regular.otf'),
      'Sk-Modernist-Bold': require('@/assets/fonts/Sk-Modernist-Bold.otf'),
      'Sk-Modernist-Light': require('@/assets/fonts/Sk-Modernist-Light.ttf'),
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
    <NavigationContainer>
      <MainStack initialRouteName={MainStackTypes.Routes.Onboarding} />
    </NavigationContainer>
  );
}
