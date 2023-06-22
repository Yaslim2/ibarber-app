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
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetUserInfo>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [updateField, email, fullname] = useSignUpStore(
    state => [state.updateField, state.email, state.fullname],
    shallow,
  );
  const nextStepPosition = useStepsStore(state => state.nextStepPosition);

  const handleNext = (): void => {
    setIsLoading(true);
    // setPassword(
    //   methods.getValues('password'),
    //   methods.getValues('passwordConfirmation'),
    // );
    updateField({
      fullname: methods.getValues('fullname'),
      email: methods.getValues('email'),
    });
    setIsLoading(false);
    navigation.navigate(SignUpStackTypes.Routes.SetPassword);
    !isLoading && nextStepPosition();
  };
  const { ...methods } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      fullname,
      email,
    },
    mode: 'onChange',
  });

  return { methods, isLoading, handleNext };
};

export default useController;
