import { useEffect, useState } from 'react';

import useCountryCodeStore from '@/shared/store/country-code';
import useSignUpStore from '@/shared/store/sign-up';
import useStepsStore from '@/shared/store/steps';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { AsYouType, CountryCode } from 'libphonenumber-js';
import { shallow } from 'zustand/shallow';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.VerificationCode>) => {
  const phoneNumber = useSignUpStore(state => state.phoneNumber);
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
  const [countryCode] = useCountryCodeStore(
    state => [state.countryCode, state.changeCountryCode, state.callingCode],
    shallow,
  );

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
    phoneNumber: new AsYouType(countryCode as CountryCode).input(phoneNumber),
  };
};

export default useController;
