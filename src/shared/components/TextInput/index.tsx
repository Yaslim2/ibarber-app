import React, { FC } from 'react';
import { useController } from 'react-hook-form';

import useTextInputController from './controller';
import { Input, InputContainer, NativeTextInput, LabelText } from './styles';
import { CustomTextInputProps } from './types';

const TextInput: FC<CustomTextInputProps> = props => {
  const { iconVariant, secureTextEntry } = useTextInputController(props);

  return (
    <InputContainer>
      <Input
        {...props}
        underlineColor="transparent"
        underlineColorAndroid="transparent"
        right={!props.disableIcon && iconVariant}
        label={props.label && <LabelText>{props.label}</LabelText>}
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
  Omit<
    CustomTextInputProps & { name: string },
    'value' | 'onBlur' | 'onChangeText'
  >
> = props => {
  const { field } = useController({ name: props.name });

  return (
    <TextInput
      {...props}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
    />
  );
};

export default TextInput;
