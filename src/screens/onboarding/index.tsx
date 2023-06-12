import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BackButton from '@/shared/components/BackButton';
import SwitchDarkTheme from '@/shared/components/SwitchDarkTheme';
import {
  MainStackTypes,
  OnboardingStackTypes,
} from '@/shared/types/navigation';

import BoardingOne from './BoardingOne';
import BoardingThree from './BoardingThree';
import BoardingTwo from './BoardingTwo';
import GetStarted from './GetStarted';
import useOnboardingController from './index.controller';
import { Container, containerStyle, switchStyle } from './styles';

const Stack = createNativeStackNavigator<OnboardingStackTypes.ParamList>();

const OnboardingStack: MainStackTypes.ComponentProps<
  MainStackTypes.Routes.Onboarding
> = ({ navigation, route }) => {
  const { initialScreen, goBack, routeName, hasHydrated } =
    useOnboardingController({
      navigation,
      route,
    });

  return (
    <Container>
      {routeName !== OnboardingStackTypes.Routes.BoardingOne && (
        <BackButton
          containerStyle={containerStyle}
          onPress={goBack}
          iconName="arrowleft"
        />
      )}
      <SwitchDarkTheme style={switchStyle} />
      {hasHydrated && initialScreen && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade',
          }}
          initialRouteName={initialScreen}
        >
          <Stack.Screen
            name={OnboardingStackTypes.Routes.BoardingOne}
            component={BoardingOne}
          />
          <Stack.Screen
            name={OnboardingStackTypes.Routes.BoardingTwo}
            component={BoardingTwo}
          />
          <Stack.Screen
            name={OnboardingStackTypes.Routes.BoardingThree}
            component={BoardingThree}
          />
          <Stack.Screen
            name={OnboardingStackTypes.Routes.GetStarted}
            component={GetStarted}
          />
        </Stack.Navigator>
      )}
    </Container>
  );
};

export default OnboardingStack;
