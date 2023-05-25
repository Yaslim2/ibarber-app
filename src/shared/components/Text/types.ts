import { Animated } from 'react-native';
import ComponentProps = Animated.ComponentProps;
import { Text as PaperText } from 'react-native-paper';

export type CustomTextProps = {
  font: 'primary' | 'secondary';
  weight: 'light' | 'regular' | 'medium' | 'bold';
  color?: string;
} & ComponentProps<typeof PaperText>;
