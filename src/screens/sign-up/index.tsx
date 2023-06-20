import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import BackButton from '@/shared/components/BackButton';
import Text from '@/shared/components/Text';
import useStepsStore from '@/shared/store/steps';
import { ThemeOverride } from '@/shared/styles/theme';
import { MainStackTypes, SignUpStackTypes } from '@/shared/types/navigation';

import { useTheme } from 'styled-components';

import SignUpStack from './components/stack';
import useSignUpController from './index.controller';
import { ActionsContainer, Container, StepBar } from './styles';

const SignUpScreen: MainStackTypes.ComponentProps<
  MainStackTypes.Routes.SignUp
> = ({ navigation, route }) => {
  const theme = useTheme() as ThemeOverride;
  const stepPosition = useStepsStore(state => state.stepPosition);

  const { routeName, stepsStyle, renderLabel, renderStepIndicator, goBack } =
    useSignUpController({
      navigation,
      route,
    });

  return (
    <Container routeName={routeName}>
      <StepBar>
        <ActionsContainer>
          <BackButton
            onPress={goBack}
            iconName={
              !routeName || routeName === SignUpStackTypes.Routes.SetUserInfo
                ? 'close'
                : 'arrowleft'
            }
          />
          <TouchableOpacity onPress={() => null}>
            <Text
              color={theme.colors.onBackground}
              font="secondary"
              weight="medium"
              size={16}
              underline
            >
              Pular
            </Text>
          </TouchableOpacity>
        </ActionsContainer>

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
