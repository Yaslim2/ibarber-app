import * as React from 'react';
import { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@/screens/login';
import OnboardingScreen from '@/screens/onboarding';
import SignUp from '@/screens/sign-up';

import useThemeStore from 'src/shared/store/theme';
import { ThemesEnum } from 'src/shared/store/theme/types';
import { MainStackTypes } from 'src/shared/types/navigation';
import { shallow } from 'zustand/shallow';

const Stack = createNativeStackNavigator<MainStackTypes.ParamList>();

const MainStack: FC<{ initialRouteName: MainStackTypes.Routes }> = ({
  initialRouteName,
}) => {
  const theme = useThemeStore(state => state.theme, shallow);

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        statusBarColor: 'transparent',
        statusBarTranslucent: true,
        statusBarStyle: ThemesEnum.dark === theme ? 'light' : ThemesEnum.light,
      }}
    >
      <Stack.Screen
        name={MainStackTypes.Routes.Onboarding}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={MainStackTypes.Routes.Login}
        component={LoginScreen}
      />
      <Stack.Screen name={MainStackTypes.Routes.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default MainStack;
