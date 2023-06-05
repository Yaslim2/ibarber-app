import * as React from 'react';
import StepIndicator from 'react-native-step-indicator';

import { MainStackTypes } from '@/shared/types/navigation';

import SignUpStack from './components/stack';
import useController from './index.controller';
import { Container } from './styles';

const SignUpScreen: MainStackTypes.ComponentProps<
  MainStackTypes.Routes.SignUp
> = ({ navigation, route }) => {
  const { routeName, stepsStyle, renderLabel, renderStepIndicator } =
    useController({
      navigation,
      route,
    });

  return (
    <Container routeName={routeName}>
      <StepIndicator
        customStyles={stepsStyle}
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
