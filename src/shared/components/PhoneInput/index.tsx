import React, { FC, useState } from 'react';

import { ControlledTextInput } from '@/shared/components/TextInput';
import { CustomTextInputProps } from '@/shared/components/TextInput/types';
import { ThemeOverride } from '@/shared/styles/theme';

import CountryPicker from 'rn-country-picker';
import { useTheme } from 'styled-components';

import { Container, styles } from './styles';

const PhoneInput: FC<
  Omit<
    CustomTextInputProps & {
      name: string;
      onChangeCountry: (value: string) => void;
    },
    'value' | 'onBlur' | 'onChangeText'
  >
> = props => {
  const [active, setActive] = useState<boolean>(false);
  const theme = useTheme() as ThemeOverride;

  return (
    <Container>
      <CountryPicker
        disable={false}
        dropDownImageStyle={styles(theme).dropDownImageStyle}
        animationType={'fade'}
        language="por"
        containerStyle={styles(theme, active, props.error).containerStyle}
        pickerTitleStyle={styles(theme).pickerTitleStyle}
        selectedCountryTextStyle={styles(theme).selectedCountryTextStyle}
        countryNameTextStyle={styles(theme).countryNameTextStyle}
        pickerTitle={'Escolha o País'}
        searchBarPlaceHolder={'Filtrar'}
        hideCountryFlag={true}
        hideCountryCode={false}
        searchBarStyle={styles(theme).searchBarStyle}
        selectedValue={props.onChangeCountry}
      />
      <ControlledTextInput
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        style={styles(theme).customTextInputStyle}
        {...props}
      />
    </Container>
  );
};

export default PhoneInput;
