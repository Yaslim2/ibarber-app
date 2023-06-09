import * as React from 'react';
import { FC } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import { Button } from './styles';
import { BackButtonProps } from './types';

const BackButton: FC<BackButtonProps> = ({
  onPress,
  iconName,
  containerStyle,
  iconColor,
}) => {
  const theme = useTheme() as ThemeOverride;

  return (
    <Button onPress={onPress} style={[containerStyle]} borderless>
      <Icon
        size={32}
        color={iconColor || theme.colors.outline}
        name={iconName || 'close'}
      />
    </Button>
  );
};

export default BackButton;
