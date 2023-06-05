import * as React from 'react';
import StepIndicator from 'react-native-step-indicator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '@/shared/components/Text';
import colors from '@/shared/styles/colors';
import { MainStackTypes } from '@/shared/types/navigation';

import SignUpStack from './components/stack';
import useController from './index.controller';
import { Container } from './styles';

const secondIndicatorStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: colors.orange.primary,
  stepStrokeWidth: 2,
  separatorStrokeFinishedWidth: 4,
  stepStrokeFinishedColor: colors.orange.primary,
  stepStrokeUnFinishedColor: colors.darkGrey.primary,
  separatorFinishedColor: colors.orange.primary,
  separatorUnFinishedColor: colors.darkGrey.primary,
  stepIndicatorFinishedColor: colors.orange.primary,
  stepIndicatorUnFinishedColor: colors.grey.primary,
  stepIndicatorCurrentColor: colors.grey.primary,
  stepIndicatorLabelCurrentColor: colors.orange.primary,
};

const renderStepIndicator = ({
  position,
  stepStatus,
}: {
  position: number;
  stepStatus: string;
}) => {
  const color =
    stepStatus === 'finished' ? colors.white.primary : colors.orange.primary;

  switch (position) {
    case 0: {
      return <MaterialCommunityIcons color={color} size={20} name="account" />;
    }
    case 1: {
      return (
        <MaterialCommunityIcons color={color} size={18} name="cellphone-lock" />
      );
    }
    case 2: {
      return <MaterialCommunityIcons color={color} size={18} name="camera" />;
    }
    case 3:
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
      ? colors.darkGrey.primary
      : stepStatus !== 'current'
      ? colors.darkGrey.primary
      : colors.orange.primary;

  return (
    <Text font="secondary" weight="bold" color={color} size={13}>
      {label}
    </Text>
  );
};

const SignUpScreen: MainStackTypes.ComponentProps<
  MainStackTypes.Routes.SignUp
> = ({ navigation, route }) => {
  const { routeName } = useController({
    navigation,
    route,
  });

  return (
    <Container routeName={routeName}>
      <StepIndicator
        customStyles={secondIndicatorStyles}
        renderStepIndicator={renderStepIndicator}
        stepCount={4}
        currentPosition={4}
        renderLabel={renderLabel}
        labels={['Usuário', 'Verificação', 'Perfil', '']}
      />
      <SignUpStack />
    </Container>
  );
};

export default SignUpScreen;
