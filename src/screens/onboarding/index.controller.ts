import { useEffect, useState } from 'react';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import useOnboardingStore from '@/shared/store/onboarding';
import {
  MainStackTypes,
  OnboardingStackTypes,
} from '@/shared/types/navigation';

import { shallow } from 'zustand/shallow';

const useOnboardingController = ({
  navigation,
  route,
}: MainStackTypes.RouteProps<MainStackTypes.Routes.Onboarding>): {
  initialScreen: OnboardingStackTypes.Routes | undefined;
  hasHydrated: boolean | null;
  goBack: () => void;
  routeName: string | undefined;
} => {
  const hasHydrated = useOnboardingStore(state => state._hasHydrated);
  const [setAccess, firstAccess] = useOnboardingStore(
    state => [state.setAccess, state.firstAccess],
    shallow,
  );

  const [initialScreen, setInitialScreen] =
    useState<OnboardingStackTypes.Routes>();

  const routeName = getFocusedRouteNameFromRoute(route);

  const goBack = (): void => {
    switch (routeName) {
      case OnboardingStackTypes.Routes.BoardingTwo:
        navigation.replace(OnboardingStackTypes.Routes.BoardingOne);
        break;
      case OnboardingStackTypes.Routes.BoardingThree:
        navigation.replace(OnboardingStackTypes.Routes.BoardingTwo);
        break;
      case OnboardingStackTypes.Routes.GetStarted:
        navigation.replace(OnboardingStackTypes.Routes.BoardingThree);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (hasHydrated) {
      if (firstAccess || firstAccess === null) {
        setAccess(true);
        setInitialScreen(OnboardingStackTypes.Routes.BoardingOne);
      } else {
        setInitialScreen(OnboardingStackTypes.Routes.GetStarted);
      }
    }
  }, [hasHydrated, firstAccess, setAccess]);

  return { hasHydrated, initialScreen, goBack, routeName };
};

export default useOnboardingController;
