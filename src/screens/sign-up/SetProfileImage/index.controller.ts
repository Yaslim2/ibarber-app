import { useState } from 'react';

import useImageCaptureController from '@/shared/components/ImageCaptureController';
import useStepsStore from '@/shared/store/steps';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { ImagePickerAsset } from 'expo-image-picker';

const useController = ({
  navigation,
}: SignUpStackTypes.RouteProps<SignUpStackTypes.Routes.SetProfileImage>) => {
  const { takePhotoFromPhone } = useImageCaptureController();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<ImagePickerAsset>();
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const handleOpenCamera = async (): Promise<void> => {
    const photo = await takePhotoFromPhone();

    setImageLoading(true);

    if (photo) {
      setImageUrl(photo);
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
  };
};

export default useController;
