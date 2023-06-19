import React, { FC } from 'react';

import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import { CameraIcon, Icon, Indicator } from './styles';
import { IconComponentProps } from './types';

const IconComponent: FC<IconComponentProps> = ({
  handleOpenCamera,
  loading,
}) => {
  const theme = useTheme() as ThemeOverride;

  return (
    <Icon onPress={handleOpenCamera} borderless>
      {!loading ? (
        <CameraIcon
          size={80}
          color={theme.dark ? theme.colors.onPrimary : theme.colors.primary}
          name="camera"
        />
      ) : (
        <Indicator size={30} />
      )}
    </Icon>
  );
};

export default IconComponent;
