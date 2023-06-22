import useOnboardingStore from '@/shared/store/onboarding';
import useStepsStore from '@/shared/store/steps';
import {
  MainStackTypes,
  OnboardingStackTypes,
} from '@/shared/types/navigation';

import { shallow } from 'zustand/shallow';

const useController = ({
  navigation,
}: OnboardingStackTypes.RouteProps<OnboardingStackTypes.Routes.GetStarted>) => {
  const [firstAccess, changeAccess] = useOnboardingStore(
    state => [state.firstAccess, state.changeAccess],
    shallow,
  );

  const resetStepPosition = useStepsStore(state => state.resetStepPosition);
  const handleNextPage = (route: 'SignUp' | 'Login') => {
    firstAccess && changeAccess();
    resetStepPosition();
    navigation.reset({
      routes: [{ name: MainStackTypes.Routes[route] }],
    });
  };

  return { handleNextPage };
};

export default useController;
