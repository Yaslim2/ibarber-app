import * as yup from 'yup';

const schema = yup.object({}).shape({
  phoneNumber: yup.string().trim().required('Número de telefone é obrigatório'),
});

export default schema;
