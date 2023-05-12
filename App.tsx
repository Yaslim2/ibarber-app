import React from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MainStack from '@/shared/routes';
import { MainStackTypes } from '@/shared/types/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack initialRouteName={MainStackTypes.Routes.Onboarding} />
    </NavigationContainer>
  );
}
