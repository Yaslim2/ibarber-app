import React, { FC } from 'react';

import { CustomText } from './styles';
import { CustomTextProps } from './types';

const Text: FC<CustomTextProps> = ({
  children,
  font,
  style,
  color,
  ...props
}) => {
  const weight: 'light' | 'regular' | 'medium' | 'bold' =
    font === 'primary' && props.weight === 'light'
      ? 'regular'
      : font === 'secondary' && props.weight === 'medium'
      ? 'regular'
      : props.weight;

  return (
    <CustomText
      {...props}
      font={font}
      color={color}
      weight={weight}
      style={style}
    >
      {children}
    </CustomText>
  );
};

export default Text;
