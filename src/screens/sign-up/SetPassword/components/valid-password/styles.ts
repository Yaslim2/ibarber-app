import { StyleSheet } from 'react-native';

import {
  lengthValidation,
  lowercaseValidation,
  numberValidation,
  specialValidation,
  uppercaseValidation,
} from '@/screens/sign-up/SetPassword/form.schema';
import { ThemeOverride } from '@/shared/styles/theme';

const validPasswordStyles = (
  { colors, dark }: ThemeOverride,
  password: string,
  confirmPassword: string,
) => {
  const length = lengthValidation(password);
  const uppercase = uppercaseValidation(password);
  const lowercase = lowercaseValidation(password);
  const number = numberValidation(password);
  const special = specialValidation(password);
  const equalPassword =
    password.length !== 0 &&
    confirmPassword.length !== 0 &&
    password === confirmPassword;

  const disabled = dark ? colors.secondary : colors.grey.secondary;

  const actualTextColor = (value: boolean): string =>
    value ? colors.outline : disabled;

  const actualIconColor = (value: boolean): string =>
    value ? colors.primary : disabled;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    lengthValidation: { width: '28%', marginBottom: 8 },
    lengthText: { color: actualTextColor(length), fontSize: 12 },
    lengthIcon: { color: actualIconColor(length) },
    uppercaseValidation: { width: '36%' },
    uppercaseText: { color: actualTextColor(uppercase), fontSize: 12 },
    uppercaseIcon: { color: actualIconColor(uppercase) },
    lowercaseValidation: { width: '36%' },
    lowercaseText: { color: actualTextColor(lowercase), fontSize: 12 },
    lowercaseIcon: { color: actualIconColor(lowercase) },
    numberValidation: { width: '28%' },
    numberText: { color: actualTextColor(number), fontSize: 12 },
    numberIcon: { color: actualIconColor(number) },
    specialValidation: { width: '36%' },
    specialText: { color: actualTextColor(special), fontSize: 12 },
    specialIcon: { color: actualIconColor(special) },
    equalPasswordValidation: { width: '28%' },
    equalPasswordText: { color: actualTextColor(equalPassword), fontSize: 12 },
    equalPasswordIcon: { color: actualIconColor(equalPassword) },
  });
};

export default validPasswordStyles;
