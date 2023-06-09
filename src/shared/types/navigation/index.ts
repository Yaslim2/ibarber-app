import { FC } from 'react';

import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ParamListFromEnum<T extends string> = Record<
  T | string,
  object | undefined
>;

export namespace MainStackTypes {
  export enum Routes {
    Onboarding = 'Onboarding',
    Login = 'Login',
    SignUp = 'SignUp',
  }

  export interface ParamList extends ParamListFromEnum<Routes> {
    [Routes.SignUp]: NavigatorScreenParams<SignUpStackTypes.ParamList>;
  }
  export type RouteProps<Route extends Routes> = NativeStackScreenProps<
    ParamList,
    Route
  >;
  export type ComponentProps<Route extends Routes> = FC<RouteProps<Route>>;
}

export namespace SignUpStackTypes {
  export enum Routes {
    SetUserInfo = 'SetUserInfo',
    SetPassword = 'SetPassword',
    SetProfileImage = 'SetProfileImage',
    SetPhoneNumber = 'SetPhoneNumber',
    Success = 'Success',
  }

  export type ParamList = ParamListFromEnum<Routes>;
  export type RouteProps<Route extends Routes> = NativeStackScreenProps<
    ParamList,
    Route
  >;
  export type ComponentProps<Route extends Routes> = FC<RouteProps<Route>>;
}
