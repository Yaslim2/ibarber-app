import { useState } from 'react';
import { Linking, Platform } from 'react-native';

import useImageCaptureController from '@/shared/components/ImageCaptureController';
import usePermissionModalStore from '@/shared/store/permission-modal';
import useStepsStore from '@/shared/store/steps';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { ImagePickerAsset } from 'expo-image-picker';
import { shallow } from 'zustand/shallow';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetProfileImage>) => {
  const [setIsModalVisible] = usePermissionModalStore(
    state => [state.setIsModalVisible],
    shallow,
  );
  const { takePhotoFromPhone } = useImageCaptureController();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<ImagePickerAsset>();
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const handleOpenCamera = async (): Promise<void> => {
    const photo = await takePhotoFromPhone();

    setImageLoading(true);

    if (photo) {
      setImageUrl(photo);
    } else {
      setIsModalVisible(true);
    }
    setImageLoading(false);
  };

  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else if (Platform.OS === 'android') {
      Linking.openSettings();
    }
  };

  const handleRemoveImage = (): void => {
    setImageUrl(undefined);
  };

  const nextStepPosition = useStepsStore(state => state.nextStepPosition);

  const handleNext = async (): Promise<void> => {
    setIsLoading(true);
    // async code
    setIsLoading(false);
    navigation.navigate(SignUpStackTypes.Routes.Success);
    nextStepPosition();
  };

  return {
    isLoading,
    handleNext,
    imageUrl,
    imageLoading,
    handleOpenCamera,
    handleRemoveImage,
    openAppSettings,
  };
};

export default useController;
