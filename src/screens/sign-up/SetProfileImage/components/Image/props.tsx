import { ImagePickerAsset } from 'expo-image-picker';

export interface ImageComponentProps {
  image: ImagePickerAsset;
  handleRemoveImage: () => void;
}
