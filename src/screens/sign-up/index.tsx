import * as React from 'react';
import StepIndicator from 'react-native-step-indicator';

import BackButton from '@/shared/components/BackButton';
import useStepsStore from '@/shared/store/steps';
import { MainStackTypes, SignUpStackTypes } from '@/shared/types/navigation';

import SignUpStack from './components/stack';
import useSignUpController from './index.controller';
import { Container, StepBar } from './styles';

const SignUpScreen: MainStackTypes.ComponentProps<
  MainStackTypes.Routes.SignUp
> = ({ navigation, route }) => {
  const stepPosition = useStepsStore(state => state.stepPosition);

  const { routeName, stepsStyle, renderLabel, renderStepIndicator, goBack } =
    useSignUpController({
      navigation,
      route,
    });

  return (
    <Container routeName={routeName}>
      <StepBar>
        <BackButton
          onPress={goBack}
          iconName={
            !routeName || routeName === SignUpStackTypes.Routes.SetUserInfo
              ? 'close'
              : 'arrowleft'
          }
        />
        <StepIndicator
          customStyles={stepsStyle}
          renderStepIndicator={renderStepIndicator}
          stepCount={5}
          renderLabel={renderLabel}
          currentPosition={stepPosition}
          labels={['Usuário', 'Senha', 'Verificação', 'Perfil', '']}
        />
      </StepBar>

      <SignUpStack />
    </Container>
  );
};

export default SignUpScreen;
