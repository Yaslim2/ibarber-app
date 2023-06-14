import { useState } from 'react';

import useStepsStore from '@/shared/store/steps';
import { SignUpStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.VerificationCode>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nextStepPosition = useStepsStore(state => state.nextStepPosition);

  const handleNext = async (): Promise<void> => {
    setIsLoading(true);
    // async code
    setIsLoading(false);
    navigation.navigate(SignUpStackTypes.Routes.SetProfileImage);
    nextStepPosition();
  };

  return {
    isLoading,
    handleNext,
  };
};

export default useController;
