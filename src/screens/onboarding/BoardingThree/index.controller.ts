import { OnboardingStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
}: OnboardingStackTypes.RouteProps<OnboardingStackTypes.Routes.BoardingThree>) => {
  const handleNextPage = () => {
    navigation.navigate(OnboardingStackTypes.Routes.GetStarted);
  };

  return { handleNextPage };
};

export default useController;
