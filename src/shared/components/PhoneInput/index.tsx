import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { ControlledTextInput } from '@/shared/components/TextInput';
import { CustomTextInputProps } from '@/shared/components/TextInput/types';
import colors from '@/shared/styles/colors';
import { ThemeOverride } from '@/shared/styles/theme';

import CountryPicker from 'rn-country-picker';
import { useTheme } from 'styled-components';

const PhoneInput: FC<
  Omit<
    CustomTextInputProps & { name: string },
    'value' | 'onBlur' | 'onChangeText'
  >
> = props => {
  const theme = useTheme() as ThemeOverride;

  return (
    <View style={{ width: '100%', flexDirection: 'row' }}>
      <CountryPicker
        disable={false}
        animationType={'slide'}
        language="en"
        containerStyle={styles.pickerStyle}
        pickerTitleStyle={styles.pickerTitleStyle}
        // dropDownImage={require('./res/ic_drop_down.png')}
        selectedCountryTextStyle={styles.selectedCountryTextStyle}
        countryNameTextStyle={styles.countryNameTextStyle}
        pickerTitle={'Country Picker'}
        searchBarPlaceHolder={'Search......'}
        hideCountryFlag={false}
        hideCountryCode={false}
        searchBarStyle={styles.searchBarStyle}
        // backButtonImage={require('./res/ic_back_black.png')}
        // searchButtonImage={require('./res/ic_search.png')}
        countryCode={'1'}
        // selectedValue={selectedValue}
      />
      <ControlledTextInput
        style={{
          width: '70%',
          borderLeftWidth: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleText: {
    color: '#000',
    fontSize: 25,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  pickerTitleStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  pickerStyle: {
    width: '30%',
    borderWidth: 1.5,
    borderRadius: 8,
    borderTopRightRadius: 0,
    marginRight: -3,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    fontSize: 16,
    borderColor: colors.lightGrey.secondary,
    color: '#000',
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    color: '#000',
    textAlign: 'right',
  },

  countryNameTextStyle: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },

  searchBarStyle: {
    flex: 1,
  },
});

export default PhoneInput;
