import * as yup from 'yup';

const lengthValidation = (value: string): boolean => value.length >= 8;
const uppercaseValidation = (value: string): boolean => /[A-Z]/.test(value);
const lowercaseValidation = (value: string): boolean => /[a-z]/.test(value);
const numberValidation = (value: string): boolean => /[0-9]/.test(value);
const specialValidation = (value: string): boolean =>
  /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);

const fullnameValidation = (value: string): boolean =>
  /^[a-z]+ [a-z]+$/.test(value);
const schema = yup.object({}).shape({
  fullname: yup
    .string()
    .required('Nome completo é obrigatório')
    .test(
      'fullname-validation',
      'Informe nome e sobrenome',
      fullnameValidation,
    ),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup
    .string()
    .trim()
    .required('Senha é obrigatória')
    .test('valid-password', 'Senha inválida', value =>
      lengthValidation(value || ''),
    )
    .test('valid-password', 'Senha inválida', value =>
      uppercaseValidation(value || ''),
    )
    .test('valid-password', 'Senha inválida', value =>
      lowercaseValidation(value || ''),
    )
    .test('valid-password', 'Senha inválida', value =>
      specialValidation(value || ''),
    )
    .test('valid-password', 'Senha inválida', value =>
      numberValidation(value || ''),
    ),
  passwordConfirmation: yup
    .string()
    .equals([yup.ref('password')], 'As senhas não correspondem')
    .required('Confirmação de senha é obrigatória'),
});

export default schema;

export {
  lengthValidation,
  uppercaseValidation,
  lowercaseValidation,
  numberValidation,
  specialValidation,
  fullnameValidation,
};
