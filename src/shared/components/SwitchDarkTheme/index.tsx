import React, { FC } from 'react';

import useThemeStore from '@/shared/store/theme';

import { Switch } from './styles';
import { CustomSwitchDarkThemeProps } from './types';

const SwitchDarkTheme: FC<CustomSwitchDarkThemeProps> = props => {
  const [changeTheme, theme] = useThemeStore(state => [
    state.changeTheme,
    state.theme,
  ]);

  return <Switch {...props} onChange={changeTheme} value={theme === 'dark'} />;
};

export default SwitchDarkTheme;
