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
    Authentication = 'Authentication',
  }

  export interface ParamList extends ParamListFromEnum<Routes> {
    [Routes.Authentication]: NavigatorScreenParams<AuthenticationStackTypes.ParamList>;
  }
  export type RouteProps<Route extends Routes> = NativeStackScreenProps<
    ParamList,
    Route
  >;
  export type ComponentProps<Route extends Routes> = FC<RouteProps<Route>>;
}

export namespace AuthenticationStackTypes {
  export enum Routes {
    Login = 'Login',
    SignUp = 'SignUp',
    ForgotPassword = 'ForgotPassword',
    CreatePassword = 'CreatePassword',
    VerificationCode = 'VerificationCode',
  }

  export type ParamList = ParamListFromEnum<Routes>;
  export type RoutesProps = NativeStackScreenProps<ParamList>;
  export type ComponentsProps = FC<RoutesProps>;
}

export namespace OnboardingStackTypes {
  export enum Routes {
    Boarding = 'Boarding',
  }

  export type ParamList = ParamListFromEnum<Routes>;
  export type RoutesProps = NativeStackScreenProps<ParamList>;
  export type ComponentsProps = FC<RoutesProps>;
}
