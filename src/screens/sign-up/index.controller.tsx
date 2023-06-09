import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Text from '@/shared/components/Text';
import useStepsStore from '@/shared/store/steps';
import { ThemeOverride } from '@/shared/styles/theme';
import { MainStackTypes, SignUpStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

const useSignUpController = ({
  navigation,
  route,
}: MainStackTypes.RouteProps<MainStackTypes.Routes.SignUp>) => {
  const backStepPosition = useStepsStore(state => state.backStepPosition);
  const theme = useTheme() as ThemeOverride;
  const stepsStyle = {
    stepIndicatorSize: 35,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2.5,
    stepStrokeCurrentColor: theme.colors.orange.primary,
    stepStrokeWidth: 2,
    separatorStrokeFinishedWidth: 4,
    stepStrokeFinishedColor: theme.colors.orange.primary,
    stepStrokeUnFinishedColor: theme.colors.darkGrey.primary,
    separatorFinishedColor: theme.colors.orange.primary,
    separatorUnFinishedColor: theme.colors.darkGrey.primary,
    stepIndicatorFinishedColor: theme.colors.orange.primary,
    stepIndicatorUnFinishedColor: theme.colors.background,
    stepIndicatorCurrentColor: theme.colors.background,
    stepIndicatorLabelCurrentColor: theme.colors.orange.primary,
  };

  const renderStepIndicator = ({
    position,
    stepStatus,
  }: {
    position: number;
    stepStatus: string;
  }) => {
    const color =
      stepStatus === 'finished'
        ? theme.colors.white.primary
        : theme.colors.orange.primary;

    switch (position) {
      case 0: {
        return (
          <MaterialCommunityIcons color={color} size={20} name="account" />
        );
      }
      case 1: {
        return <MaterialCommunityIcons color={color} size={18} name="lock" />;
      }
      case 2: {
        return (
          <MaterialCommunityIcons
            color={color}
            size={18}
            name="cellphone-lock"
          />
        );
      }
      case 3: {
        return <MaterialCommunityIcons color={color} size={18} name="camera" />;
      }
      case 4:
        return <MaterialCommunityIcons color={color} size={15} name="check" />;
      default: {
        break;
      }
    }
  };

  const renderLabel = ({
    label,
    stepStatus,
  }: {
    position: number;
    stepStatus: string;
    label: string;
    currentPosition: number;
  }) => {
    const color =
      stepStatus === 'finished'
        ? theme.colors.darkGrey.primary
        : stepStatus !== 'current'
        ? theme.colors.darkGrey.primary
        : theme.colors.orange.primary;

    return (
      <Text font="secondary" weight="bold" color={color} size={12}>
        {label}
      </Text>
    );
  };
  const routeName = getFocusedRouteNameFromRoute(route);

  const handleClose = (): void =>
    navigation.reset({ routes: [{ name: MainStackTypes.Routes.Onboarding }] });

  const goBack = (): void => {
    switch (routeName) {
      case SignUpStackTypes.Routes.SetUserInfo:
        handleClose();
        break;
      case SignUpStackTypes.Routes.SetPassword:
        navigation.replace(SignUpStackTypes.Routes.SetUserInfo);
        backStepPosition();
        break;
      case SignUpStackTypes.Routes.SetProfileImage:
        navigation.replace(SignUpStackTypes.Routes.SetPassword);
        backStepPosition();
        break;
      case SignUpStackTypes.Routes.SetPhoneNumber:
        navigation.replace(SignUpStackTypes.Routes.SetProfileImage);
        backStepPosition();
        break;
      default:
        handleClose();
        break;
    }
  };

  return {
    goBack,
    routeName,
    stepsStyle,
    renderLabel,
    renderStepIndicator,
  };
};

export default useSignUpController;
