import { GestureResponderEvent, ViewStyle } from 'react-native';

export interface BackButtonProps {
  onPress: ((e: GestureResponderEvent) => void) | undefined;
  containerStyle?: ViewStyle;
  iconName?: string;
  iconColor?: string;
}
