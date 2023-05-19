import * as React from 'react';
import { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useThemeStore from '@/shared/store/theme';
import { ThemesEnum } from '@/shared/store/theme/types';
import { OnboardingStackTypes } from '@/shared/types/navigation';

import { shallow } from 'zustand/shallow';

import Boarding from './components/Boarding';
import { Container } from './styles';

const Tab = createNativeStackNavigator<OnboardingStackTypes.ParamList>();

const OnboardingScreen: FC = () => {
  const theme = useThemeStore(state => state.theme, shallow);

  return (
    <Container>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          statusBarColor: 'transparent',
          statusBarTranslucent: true,
          statusBarStyle:
            ThemesEnum.dark === theme ? 'light' : ThemesEnum.light,
        }}
        initialRouteName={OnboardingStackTypes.Routes.BoardingOne}
      >
        <Tab.Screen
          name={OnboardingStackTypes.Routes.BoardingOne}
          component={Boarding}
        />
        <Tab.Screen
          name={OnboardingStackTypes.Routes.BoardingTwo}
          component={Boarding}
        />
        <Tab.Screen
          name={OnboardingStackTypes.Routes.BoardingThree}
          component={Boarding}
          options={{ statusBarStyle: 'light' }}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default OnboardingScreen;
