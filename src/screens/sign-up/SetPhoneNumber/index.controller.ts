import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useConfirmPhoneNumberModalStore from '@/shared/store/confirm-phone-number-modal';
import useCountryCodeStore from '@/shared/store/country-code';
import useSignUpStore from '@/shared/store/sign-up';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { shallow } from 'zustand/shallow';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetPhoneNumber>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countryCode, changeCountryCode, callingCode] = useCountryCodeStore(
    state => [state.countryCode, state.changeCountryCode, state.callingCode],
    shallow,
  );
  const [updateField, phoneNumber] = useSignUpStore(
    state => [state.updateField, state.phoneNumber],
    shallow,
  );
  const setIsModalVisible = useConfirmPhoneNumberModalStore(
    state => state.setIsModalVisible,
  );

  const handleOpenModal = (): void => {
    setIsModalVisible(true);
  };

  const handleNext = async (): Promise<void> => {
    setIsLoading(true);
    // async code
    updateField({ phoneNumber: methods.getValues('phoneNumber') });
    setIsLoading(false);
    setIsModalVisible(false);
    navigation.navigate(SignUpStackTypes.Routes.VerificationCode);
  };

  const { ...methods } = useForm({
    defaultValues: {
      phoneNumber,
    },
    mode: 'onChange',
  });

  return {
    methods,
    isLoading,
    handleOpenModal,
    handleNext,
    changeCountryCode,
    countryCode,
    callingCode,
  };
};

export default useController;
