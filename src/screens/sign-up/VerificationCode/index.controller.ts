import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useConfirmPhoneNumberModalStore from '@/shared/store/confirm-phone-number-modal';
import useCountryCodeStore from '@/shared/store/country-code';
import useStepsStore from '@/shared/store/steps';
import { SignUpStackTypes } from '@/shared/types/navigation';
import { yupResolver } from '@hookform/resolvers/yup';

import formValidationSchema from './form.schema';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.VerificationCode>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countryCode, changeCountryCode, callingCode] = useCountryCodeStore(
    state => [state.countryCode, state.changeCountryCode, state.callingCode],
  );
  const setIsModalVisible = useConfirmPhoneNumberModalStore(
    state => state.setIsModalVisible,
  );
  const nextStepPosition = useStepsStore(state => state.nextStepPosition);

  const handleNext = async (): Promise<void> => {
    setIsLoading(true);
    // async code
    setIsLoading(false);
    setIsModalVisible(false);
    navigation.navigate(SignUpStackTypes.Routes.VerificationCode);
    nextStepPosition();
  };

  const { ...methods } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      phoneNumber: '',
    },
    mode: 'onChange',
  });

  return {
    methods,
    isLoading,
    handleNext,
    changeCountryCode,
    countryCode,
    callingCode,
  };
};

export default useController;
