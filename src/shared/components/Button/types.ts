import { Animated } from 'react-native';
import ComponentProps = Animated.ComponentProps;
import { Button as PaperButton } from 'react-native-paper';

export type CustomButtonProps = {} & ComponentProps<typeof PaperButton>;
