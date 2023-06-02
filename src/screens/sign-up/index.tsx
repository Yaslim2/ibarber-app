import * as React from 'react';

import { MainStackTypes } from '@/shared/types/navigation';

import SignUpStack from './components/stack';
import useController from './index.controller';
import { Container } from './styles';

const SignUpScreen: MainStackTypes.ComponentProps<
  MainStackTypes.Routes.SignUp
> = ({ navigation, route }) => {
  const { routeName } = useController({
    navigation,
    route,
  });

  return (
    <Container routeName={routeName}>
      <SignUpStack />
    </Container>
  );
};

export default SignUpScreen;
