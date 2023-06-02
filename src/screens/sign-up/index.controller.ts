import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { MainStackTypes, SignUpStackTypes } from '@/shared/types/navigation';

const useController = ({
  navigation,
  route,
}: MainStackTypes.RouteProps<MainStackTypes.Routes.SignUp>) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  const handleClose = (): void =>
    navigation.reset({ routes: [{ name: MainStackTypes.Routes.Onboarding }] });

  const goBack = (): void => {
    switch (routeName) {
      case SignUpStackTypes.Routes.SetUserInfo:
        handleClose();
        break;
      case SignUpStackTypes.Routes.SetProfileImage:
        navigation.navigate(SignUpStackTypes.Routes.SetUserInfo);
        break;
      case SignUpStackTypes.Routes.SetPhoneNumber:
        navigation.navigate(SignUpStackTypes.Routes.SetProfileImage);
        break;
      case SignUpStackTypes.Routes.VerificationCode:
        navigation.navigate(SignUpStackTypes.Routes.SetPhoneNumber);
        break;
      default:
        handleClose();
        break;
    }
  };

  return {
    goBack,
    routeName,
  };
};

export default useController;
