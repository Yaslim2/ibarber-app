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
  }

  export interface ParamList extends ParamListFromEnum<Routes> {
    [Routes.Onboarding]: NavigatorScreenParams<OnboardingStackTypes.ParamList>;
  }
  export type RouteProps<Route extends Routes> = NativeStackScreenProps<
    ParamList,
    Route
  >;
  export type ComponentProps<Route extends Routes> = FC<RouteProps<Route>>;
}

export namespace OnboardingStackTypes {
  export enum Routes {
    BoardingOne = 'BoardingOne',
    BoardingTwo = 'BoardingTwo',
    BoardingThree = 'BoardingThree',
  }

  export type ParamList = ParamListFromEnum<Routes>;
  export type RoutesProps = NativeStackScreenProps<ParamList>;
  export type ComponentsProps = FC<RoutesProps>;
}
