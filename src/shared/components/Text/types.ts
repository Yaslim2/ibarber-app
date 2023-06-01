import { Animated } from 'react-native';
import ComponentProps = Animated.ComponentProps;
import { Text as PaperText } from 'react-native-paper';

export type CustomTextProps = {
  font: 'primary' | 'secondary';
  weight: 'light' | 'regular' | 'medium' | 'bold';
  underline?: boolean;
  color?: string;
} & ComponentProps<typeof PaperText>;
