import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useConfirmPhoneNumberModalStore from '@/shared/store/confirm-phone-number-modal';
import useStepsStore from '@/shared/store/steps';
import { SignUpStackTypes } from '@/shared/types/navigation';
import { yupResolver } from '@hookform/resolvers/yup';

import formValidationSchema from './form.schema';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetPhoneNumber>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setIsModalVisible = useConfirmPhoneNumberModalStore(
    state => state.setIsModalVisible,
  );
  const nextStepPosition = useStepsStore(state => state.nextStepPosition);

  const handleNext = (): void => {
    setIsLoading(true);
    // setPassword(
    //   methods.getValues('password'),
    //   methods.getValues('passwordConfirmation'),
    // );
    setIsLoading(false);
    setIsModalVisible(true);
    // navigation.navigate(SignUpStackTypes.Routes.SetPhoneNumber);
    nextStepPosition();
  };

  const { ...methods } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      phoneNumber: '',
    },
    mode: 'onChange',
  });

  return { methods, isLoading, handleNext };
};

export default useController;
