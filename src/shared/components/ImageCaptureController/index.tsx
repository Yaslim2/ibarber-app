import ImagePicker, { Image, Options } from 'react-native-image-crop-picker';

import {
  ImagePickerAsset,
  launchCameraAsync,
  launchImageLibraryAsync,
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
  MediaTypeOptions,
} from 'expo-image-picker';

const useImageCaptureController = (): {
  cropImage: (
    image: ImagePickerAsset | null,
    callBackLoader: (value: boolean) => void,
  ) => Promise<Image | null>;
  takePhoto: () => Promise<ImagePickerAsset | null>;
  takePhotoFromPhone: () => Promise<ImagePickerAsset | null>;
} => {
  const defaultOptionsCrop: Options = {
    width: 500,
    height: 500,
    cropping: true,
    mediaType: 'photo',
    includeBase64: true,
    maxFiles: 1,
    minFiles: 1,
    freeStyleCropEnabled: true,
    compressImageMaxWidth: 1000,
    compressImageMaxHeight: 1000,
    compressImageQuality: 1,
  };

  const takePhoto = async (): Promise<ImagePickerAsset | null> => {
    try {
      const { status } = await requestCameraPermissionsAsync();

      if (status !== 'granted') {
        return null;
      }

      const { assets, canceled } = await launchCameraAsync({
        allowsEditing: true,
        mediaTypes: MediaTypeOptions.Images,
        selectionLimit: 1,
        allowsMultipleSelection: false,
      });

      if (!assets || canceled) {
        return null;
      }

      return assets[0];
    } catch (error) {
      return null;
    }
  };

  const takePhotoFromPhone = async (): Promise<ImagePickerAsset | null> => {
    try {
      const { status } = await requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        return null;
      }

      const { assets, canceled } = await launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: MediaTypeOptions.Images,
        selectionLimit: 1,
        allowsMultipleSelection: false,
      });

      if (!assets || canceled) {
        return null;
      }

      return assets[0];
    } catch (error) {
      return null;
    }
  };
  const cropImage = async (
    image: ImagePickerAsset | null,
    callBackLoader: (value: boolean) => void,
  ): Promise<Image | null> => {
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];

    if (image?.type && allowedTypes.includes(image.type)) {
      try {
        if (image === null) {
          return null;
        }

        // time to load the image from the phone gallery into the crop view
        await new Promise(resolve => {
          setTimeout(() => resolve, 2000);
        });

        callBackLoader(false);

        return await ImagePicker.openCropper({
          path: image.uri || '',
          ...defaultOptionsCrop,
        });
      } catch (error) {
        return null;
      }
    } else {
      callBackLoader(false);

      return null;
    }
  };

  return { takePhoto, takePhotoFromPhone, cropImage };
};

export default useImageCaptureController;
