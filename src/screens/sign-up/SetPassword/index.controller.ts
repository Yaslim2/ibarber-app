import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useSignUpStore from '@/shared/store/sign-up';
import useStepsStore from '@/shared/store/steps';
import { SignUpStackTypes } from '@/shared/types/navigation';
import { yupResolver } from '@hookform/resolvers/yup';

import { shallow } from 'zustand/shallow';

import formValidationSchema from './form.schema';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetPassword>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const nextStepPosition = useStepsStore(state => state.nextStepPosition);
  const [updateField, password, passwordConfirmation] = useSignUpStore(
    state => [state.updateField, state.password, state.passwordConfirmation],
    shallow,
  );

  const handleNext = (): void => {
    setIsLoading(true);
    // setPassword(
    //   methods.getValues('password'),
    //   methods.getValues('passwordConfirmation'),
    // );
    updateField({
      password: methods.getValues('password'),
      passwordConfirmation: methods.getValues('passwordConfirmation'),
    });
    setIsLoading(false);
    navigation.navigate(SignUpStackTypes.Routes.SetPhoneNumber);
    !isLoading && nextStepPosition();
  };

  const { ...methods } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      password,
      passwordConfirmation,
    },
    mode: 'onChange',
  });

  return { methods, isLoading, handleNext };
};

export default useController;
