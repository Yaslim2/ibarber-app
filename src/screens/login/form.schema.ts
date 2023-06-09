import * as yup from 'yup';

const formValidationSchema = yup
  .object()
  .shape({
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().trim().required('Senha obrigatória'),
  })
  .test(
    'required',
    'Preencha os campos abaixo para continuar',
    function (value) {
      return !(value?.email?.length === 0 && value?.password?.length === 0);
    },
  );

export default formValidationSchema;
