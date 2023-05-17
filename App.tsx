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
      'DM-Sans-Bold': require('@/assets/fonts/DMSans-Bold.ttf'),
      'DM-Sans-Bold-Italic': require('@/assets/fonts/DMSans-BoldItalic.ttf'),
      'DM-Sans-Italic': require('@/assets/fonts/DMSans-Italic.ttf'),
      'DM-Sans-Medium': require('@/assets/fonts/DMSans-Medium.ttf'),
      'DM-Sans-Medium-Italic': require('@/assets/fonts/DMSans-MediumItalic.ttf'),
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
    <NavigationContainer>
      <MainStack initialRouteName={MainStackTypes.Routes.Onboarding} />
    </NavigationContainer>
  );
}
