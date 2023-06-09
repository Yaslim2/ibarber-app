import { OnboardingStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: OnboardingStackTypes.RouteProps<OnboardingStackTypes.Routes.BoardingTwo>) => {
  const handleNextPage = () => {
    navigation.navigate(OnboardingStackTypes.Routes.BoardingThree);
  };

  return { handleNextPage };
};

export default useController;
