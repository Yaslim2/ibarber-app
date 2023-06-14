import React from 'react';
import { FormProvider } from 'react-hook-form';

import Button from '@/shared/components/Button';
import PhoneInput from '@/shared/components/PhoneInput';
import Text from '@/shared/components/Text';
import { CountryCodes } from '@/shared/constants';
import { ThemeOverride } from '@/shared/styles/theme';
import { SignUpStackTypes } from '@/shared/types/navigation';

import { countries } from 'countries-list';
import { CountryCode, isValidNumberForRegion } from 'libphonenumber-js';
import { useTheme } from 'styled-components';

import useController from './index.controller';
import { ContainerKeyboardAwareView, Content, TitleContainer } from './styles';

const VerificationCode: SignUpStackTypes.ComponentProps<
  SignUpStackTypes.Routes.VerificationCode
> = props => {
  const theme = useTheme() as ThemeOverride;
  const {
    methods,
    isLoading,
    handleNext,
    changeCountryCode,
    countryCode,
    callingCode,
  } = useController(props);

  return (
    <ContainerKeyboardAwareView
      enableAutomaticScroll={true}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <Content>
        <TitleContainer>
          <Text size={20} font="primary" weight="light">
            {
              'Para sua segurança, iremos vincular o seu número de telefone à sua conta'
            }
          </Text>
        </TitleContainer>
        <FormProvider {...methods}>
          <PhoneInput
            onChangeCountry={value => {
              const selectedCountryCode = Object.keys(countries).find(
                key => countries[key as CountryCodes].phone === value,
              );

              changeCountryCode(selectedCountryCode!, value);
            }}
            name="phoneNumber"
            autoCapitalize="none"
            label="Número de telefone"
            keyboardType="phone-pad"
            error={
              !isValidNumberForRegion(
                `+${callingCode}${methods.watch('phoneNumber')}`,
                countryCode as CountryCode,
              )
            }
          />
        </FormProvider>
        <Button
          loading={isLoading}
          onPress={methods.handleSubmit(handleNext)}
          disabled={
            !isValidNumberForRegion(
              `+${callingCode}${methods.watch('phoneNumber')}`,
              countryCode as CountryCode,
            )
          }
          buttonColor={theme.colors.primary}
        >
          Avançar
        </Button>
      </Content>
    </ContainerKeyboardAwareView>
  );
};

export default VerificationCode;
