import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { DefaultTheme, MD3Theme } from 'react-native-paper';

import colors from '@/shared/styles/colors';
import { ThemeOverride } from '@/shared/styles/theme';

import { useTheme } from 'styled-components';

import useTextInputController from './controller';
import { Input, InputContainer, NativeTextInput, LabelText } from './styles';
import { CustomTextInputProps } from './types';

const TextInput: FC<CustomTextInputProps> = props => {
  const theme = useTheme() as ThemeOverride;
  const { iconVariant, secureTextEntry, active, handleBlur, handleFocus } =
    useTextInputController(props);
  let borderColor = theme.dark ? theme.colors.secondary : theme.colors.outline;

  if (props.error) {
    borderColor = theme.colors.error;
  } else if (active) {
    borderColor = theme.colors.primary;
  }

  const themePaper: MD3Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      onSurfaceVariant: theme.colors.onSurfaceVariant,
    },
    fonts: {
      ...DefaultTheme.fonts,
      bodyLarge: {
        ...DefaultTheme.fonts.bodyLarge,
        fontFamily: 'Sk-Modernist',
      },
    },
  };

  return (
    <InputContainer>
      <Input
        {...props}
        borderColor={borderColor}
        onBlur={handleBlur}
        onFocus={handleFocus}
        theme={themePaper}
        selectionColor={colors.orange.primary}
        activeUnderlineColor="transparent"
        underlineColor="transparent"
        underlineColorAndroid="transparent"
        right={!props.disableIcon && iconVariant}
        label={
          props.label && (
            <LabelText
              font="secondary"
              weight="regular"
              color={
                theme.dark ? theme.colors.outline : theme.colors.grey.secondary
              }
            >
              {props.label}
            </LabelText>
          )
        }
        secureTextEntry={props.secureTextEntry && secureTextEntry}
        style={props.style}
        mode="flat"
        dense={true}
        {...(props.multiline && {
          render: innerProps => (
            <NativeTextInput {...innerProps} style={innerProps.style} />
          ),
        })}
      />
    </InputContainer>
  );
};

export const ControlledTextInput: FC<
  Omit<CustomTextInputProps & { name: string }, 'value' | 'onChangeText'>
> = props => {
  const { field } = useController({ name: props.name });

  return (
    <TextInput
      {...props}
      onChangeText={field.onChange}
      onBlur={e => {
        field.onBlur();
        props.onBlur && props.onBlur(e);
      }}
      value={field.value}
    />
  );
};

export default TextInput;
