import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingStackTypes } from '@/shared/types/navigation';

import { Container } from './styles';

const Tab = createNativeStackNavigator<OnboardingStackTypes.ParamList>();

const OnboardingScreen: FC = () => (
  <Container>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        statusBarColor: 'transparent',
        statusBarTranslucent: true,
        statusBarStyle: 'dark',
      }}
      initialRouteName={OnboardingStackTypes.Routes.BoardingOne}
    >
      <Tab.Screen
        name={OnboardingStackTypes.Routes.BoardingOne}
        component={() => <View />}
      />
      <Tab.Screen
        name={OnboardingStackTypes.Routes.BoardingTwo}
        component={() => <View />}
      />
      <Tab.Screen
        name={OnboardingStackTypes.Routes.BoardingThree}
        component={() => <View />}
        options={{ statusBarStyle: 'light' }}
      />
    </Tab.Navigator>
  </Container>
);

export default OnboardingScreen;
