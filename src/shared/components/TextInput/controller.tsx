import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { TextInput as TextInputPaper } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

import EyeWill from '@/assets/svg/eye-will.svg';
import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import { CustomTextInputProps } from './types';

const useTextInputController = ({
  error,
  search,
  value,
  onBlur,
  onFocus,
  ...rest
}: CustomTextInputProps) => {
  const theme = useTheme() as ThemeOverride;
  const [active, setActive] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [iconType, setIconType] = useState<
    'none' | 'valid' | 'error' | 'password'
  >('none');
  const [iconVariant, setIconVariant] = useState<JSX.Element | string>('');

  const handleFocus = (
    props: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    setActive(true);
    onFocus && onFocus(props);
  };

  const handleBlur = (
    props: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    setActive(false);
    onBlur && onBlur(props);
  };

  const handleIconVariant = React.useCallback((): JSX.Element | string => {
    if (value && value.length > 0) {
      switch (iconType) {
        case 'valid':
          return (
            <TextInputPaper.Icon
              icon={(): JSX.Element => (
                <AntDesign
                  name="checkcircleo"
                  size={20}
                  color={theme?.colors?.primary || 'blue'}
                />
              )}
              disabled={true}
            />
          );
        case 'error':
          return (
            <TextInputPaper.Icon
              icon={(): JSX.Element => (
                <AntDesign
                  name="closecircleo"
                  size={20}
                  color={theme?.colors?.error || 'red'}
                />
              )}
              disabled={!rest.secureTextEntry}
              onPress={(): void => setSecureTextEntry(!secureTextEntry)}
            />
          );
        case 'password':
          return (
            <TextInputPaper.Icon
              icon={(): JSX.Element =>
                secureTextEntry ? (
                  <EyeWill
                    width={20}
                    height={20}
                    fill={theme?.colors?.primary}
                  />
                ) : (
                  <AntDesign
                    name="eyeo"
                    size={20}
                    color={theme?.colors?.primary}
                  />
                )
              }
              onPress={(): void => setSecureTextEntry(!secureTextEntry)}
            />
          );
        default:
          return '';
      }
    }

    return '';
  }, [
    value,
    iconType,
    rest.secureTextEntry,
    theme?.colors?.primary,
    theme?.colors?.error,
    secureTextEntry,
  ]);

  React.useEffect(() => {
    setIconVariant(handleIconVariant());
  }, [value, handleIconVariant]);

  React.useEffect(() => {
    if (error) {
      setIconType('error');
    } else if (rest.secureTextEntry && !rest.right) {
      setIconType('password');
    } else if (value && value.length > 0) {
      setIconType('valid');
    } else {
      setIconType('none');
    }
  }, [rest.secureTextEntry, error, value, rest.right, search]);

  return {
    iconVariant,
    secureTextEntry,
    active,
    handleBlur,
    handleFocus,
  };
};

export default useTextInputController;
