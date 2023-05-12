import * as React from 'react';
import { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '@/screens/onboarding';

import { MainStackTypes } from 'src/shared/types/navigation';

const Stack = createNativeStackNavigator<MainStackTypes.ParamList>();

const MainStack: FC<{ initialRouteName: MainStackTypes.Routes }> = ({
  initialRouteName,
}) => (
  <Stack.Navigator
    initialRouteName={initialRouteName}
    screenOptions={{
      statusBarColor: '#fff',
      statusBarStyle: 'auto',
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={MainStackTypes.Routes.Onboarding}
      component={OnboardingScreen}
    />
  </Stack.Navigator>
);

export default MainStack;
