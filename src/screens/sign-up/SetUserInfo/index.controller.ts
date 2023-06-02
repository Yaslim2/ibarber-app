import { useForm } from 'react-hook-form';

import { SignUpStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetUserInfo>) => {
  console.warn(navigation);

  const { ...methods } = useForm({
    // resolver: yupResolver(formValidationSchema),
    defaultValues: { fullname: '', email: '', password: '' },
    mode: 'onChange',
  });

  return { methods };
};

export default useController;
