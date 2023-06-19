import { Image } from 'react-native-image-crop-picker';

export interface ImageComponentProps {
  image: Image;
  handleRemoveImage: () => void;
}
