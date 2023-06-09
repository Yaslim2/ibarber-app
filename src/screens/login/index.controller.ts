import { useForm } from 'react-hook-form';

import { MainStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: MainStackTypes.RouteProps<MainStackTypes.Routes.Login>) => {
  const goBack = (): void => {
    navigation.reset({ routes: [{ name: MainStackTypes.Routes.Onboarding }] });
  };

  const { ...methods } = useForm({
    // resolver: yupResolver(formValidationSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  return { methods, goBack };
};

export default useController;
