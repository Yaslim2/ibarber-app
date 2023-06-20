import { useEffect, useState } from 'react';

import { useRoute } from '@react-navigation/native';

import useStepsStore from '@/shared/store/steps';
import { SignUpStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.VerificationCode>) => {
  const { params } = useRoute() as { params: { phoneNumber: string } };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState(60);
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    let interval: number;

    if (isActive) {
      if (remainingTime > 0) {
        interval = setInterval(() => {
          setRemainingTime(prevTime => prevTime - 1);
        }, 1000);
      } else {
        setIsActive(false);
      }
    }

    return () => clearInterval(interval);
  }, [remainingTime, isActive]);

  const nextStepPosition = useStepsStore(state => state.nextStepPosition);

  const handleStartCount = () => {
    if (remainingTime === 0) {
      setRemainingTime(60);
      setIsActive(true);
    }
  };

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
    remainingTime,
    handleStartCount,
    phoneNumber: params.phoneNumber,
  };
};

export default useController;
