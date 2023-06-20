import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useConfirmPhoneNumberModalStore from '@/shared/store/confirm-phone-number-modal';
import useCountryCodeStore from '@/shared/store/country-code';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { AsYouType, CountryCode } from 'libphonenumber-js';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetPhoneNumber>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countryCode, changeCountryCode, callingCode] = useCountryCodeStore(
    state => [state.countryCode, state.changeCountryCode, state.callingCode],
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
    setIsLoading(false);
    setIsModalVisible(false);
    navigation.navigate(SignUpStackTypes.Routes.VerificationCode, {
      phoneNumber: new AsYouType(countryCode as CountryCode).input(
        `${methods.watch('phoneNumber')}`,
      ),
    });
  };

  const { ...methods } = useForm({
    defaultValues: {
      phoneNumber: '',
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
