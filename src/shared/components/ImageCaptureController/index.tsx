import {
  ImagePickerAsset,
  launchCameraAsync,
  launchImageLibraryAsync,
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
  MediaTypeOptions,
} from 'expo-image-picker';

const useImageCaptureController = (): {
  takePhoto: () => Promise<ImagePickerAsset | null>;
  takePhotoFromPhone: () => Promise<ImagePickerAsset | null>;
} => {
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

  return { takePhoto, takePhotoFromPhone };
};

export default useImageCaptureController;
