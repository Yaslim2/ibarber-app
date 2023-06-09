import * as yup from 'yup';

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
});

export default schema;

export { fullnameValidation };
