import {
  ImagePickerAsset,
  launchCameraAsync,
  launchImageLibraryAsync,
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
  MediaTypeOptions,
} from 'expo-image-picker';

const useImageCaptureController = (): {
  takePhoto: () => Promise<ImagePickerAsset | null | undefined>;
  takePhotoFromPhone: () => Promise<ImagePickerAsset | null | undefined>;
} => {
  const takePhoto = async (): Promise<ImagePickerAsset | null | undefined> => {
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
        return undefined;
      }

      return assets[0];
    } catch (error) {
      return null;
    }
  };

  const takePhotoFromPhone = async (): Promise<
    ImagePickerAsset | null | undefined
  > => {
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
        return undefined;
      }

      return assets[0];
    } catch (error) {
      return undefined;
    }
  };

  return { takePhoto, takePhotoFromPhone };
};

export default useImageCaptureController;
