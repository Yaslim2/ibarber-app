import { useForm } from 'react-hook-form';

import { SignUpStackTypes } from '@/shared/types/navigation';
import { yupResolver } from '@hookform/resolvers/yup';

import formValidationSchema from './form.schema';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetUserInfo>) => {
  console.warn(navigation);

  const { ...methods } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onChange',
  });

  return { methods };
};

export default useController;
