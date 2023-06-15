import React, { FC } from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { Cell, rootStyle } from './styles';
import { CodeInputProps } from './types';

const CodeInput: FC<CodeInputProps> = props => {
  const ref = useBlurOnFulfill({
    value: props.value,
    cellCount: props.cellCount,
  });

  const [inputProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: props.value,
    setValue: props.setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...inputProps}
      value={props.value}
      rootStyle={rootStyle}
      onChangeText={props.setValue}
      cellCount={props.cellCount}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Cell
          key={index}
          font="secondary"
          weight="regular"
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : symbol)}
        </Cell>
      )}
    />
  );
};

export default CodeInput;
