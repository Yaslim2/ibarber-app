import React, { FC } from 'react';

import useTextInputController from './controller';
import { Input, InputContainer, NativeTextInput, LabelText } from './styles';
import { CustomTextProps } from './types';

const TextInput: FC<CustomTextProps> = props => {
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

export default TextInput;
