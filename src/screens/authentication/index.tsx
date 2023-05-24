import * as React from 'react';
import { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useThemeStore from '@/shared/store/theme';
import { ThemesEnum } from '@/shared/store/theme/types';
import { AuthenticationStackTypes } from '@/shared/types/navigation';

import { shallow } from 'zustand/shallow';

import CreatePassword from './create-password';
import ForgotPassword from './forgot-password';
import Login from './login';
import SignUp from './sign-up';
import VerificationCode from './verification-code';

const Stack = createNativeStackNavigator<AuthenticationStackTypes.ParamList>();

const AuthenticationScreen: FC = () => {
  const theme = useThemeStore(state => state.theme, shallow);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        statusBarColor: 'transparent',
        statusBarTranslucent: true,
        statusBarStyle: ThemesEnum.dark === theme ? 'light' : ThemesEnum.light,
      }}
      initialRouteName={AuthenticationStackTypes.Routes.Login}
    >
      <Stack.Screen
        name={AuthenticationStackTypes.Routes.Login}
        component={Login}
      />
      <Stack.Screen
        name={AuthenticationStackTypes.Routes.SignUp}
        component={SignUp}
      />
      <Stack.Screen
        name={AuthenticationStackTypes.Routes.ForgotPassword}
        component={ForgotPassword}
        options={{ statusBarStyle: 'light' }}
      />
      <Stack.Screen
        name={AuthenticationStackTypes.Routes.VerificationCode}
        component={VerificationCode}
        options={{ statusBarStyle: 'light' }}
      />
      <Stack.Screen
        name={AuthenticationStackTypes.Routes.CreatePassword}
        component={CreatePassword}
        options={{ statusBarStyle: 'light' }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationScreen;
