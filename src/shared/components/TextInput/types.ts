import { Animated, ViewStyle } from 'react-native';
import ComponentProps = Animated.ComponentProps;
import { TextInput } from 'react-native-paper';
export type CustomTextProps = {
  containerStyle?: ViewStyle;
  disableIcon?: boolean;
  search?: boolean;
} & Omit<
  ComponentProps<typeof TextInput>,
  'mode' | 'underlineColor' | 'underlineColorAndroid' | 'dense'
>;
