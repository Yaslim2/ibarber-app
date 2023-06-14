import * as React from 'react';
import { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SetPassword from '@/screens/sign-up/SetPassword';
import SetPhoneNumber from '@/screens/sign-up/SetPhoneNumber';
import SetUserInfo from '@/screens/sign-up/SetUserInfo';
import { SignUpStackTypes } from '@/shared/types/navigation';

import VerificationCode from 'src/screens/sign-up/VerificationCode';

const Stack = createNativeStackNavigator<SignUpStackTypes.ParamList>();

const SignUpStack: FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'fade',
    }}
    initialRouteName={SignUpStackTypes.Routes.SetUserInfo}
  >
    <Stack.Screen
      name={SignUpStackTypes.Routes.SetUserInfo}
      component={SetUserInfo}
    />
    <Stack.Screen
      name={SignUpStackTypes.Routes.SetPassword}
      component={SetPassword}
    />
    <Stack.Screen
      name={SignUpStackTypes.Routes.SetPhoneNumber}
      component={SetPhoneNumber}
    />
    <Stack.Screen
      name={SignUpStackTypes.Routes.VerificationCode}
      component={VerificationCode}
    />
  </Stack.Navigator>
);

export default SignUpStack;
