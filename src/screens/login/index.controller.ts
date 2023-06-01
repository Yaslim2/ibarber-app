import { useForm } from 'react-hook-form';

import { MainStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: MainStackTypes.RouteProps<MainStackTypes.Routes.Login>) => {
  console.warn(navigation);

  const { ...methods } = useForm({
    // resolver: yupResolver(formValidationSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  return { methods };
};

export default useController;
