import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useStepsStore from '@/shared/store/steps';
import { SignUpStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetPassword>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const nextStepPosition = useStepsStore(state => state.nextStepPosition);

  const handleNext = (): void => {
    setIsLoading(true);
    // setPassword(
    //   methods.getValues('password'),
    //   methods.getValues('passwordConfirmation'),
    // );
    setIsLoading(false);
    navigation.navigate(SignUpStackTypes.Routes.SetPhoneNumber);
    nextStepPosition();
  };

  const { ...methods } = useForm({
    // resolver: yupResolver(formValidationSchema),
    defaultValues: {
      phoneNumber: '',
    },
    mode: 'onChange',
  });

  return { methods, isLoading, handleNext };
};

export default useController;
