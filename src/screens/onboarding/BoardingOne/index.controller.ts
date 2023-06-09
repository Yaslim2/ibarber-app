import { OnboardingStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: OnboardingStackTypes.RouteProps<OnboardingStackTypes.Routes.BoardingOne>) => {
  const handleNextPage = () => {
    navigation.navigate(OnboardingStackTypes.Routes.BoardingTwo);
  };

  return { handleNextPage };
};

export default useController;
