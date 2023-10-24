import * as yup from 'yup';
export const singInSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatório'),
});

export const singUpSchema = yup.object({
  firstName: yup.string().required('O nome é obrigatório'),
  lastName: yup.string().required('O sobrenome é obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
});

export const passwordManagerSchema = yup.object().shape({
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(8, 'Deve ter no mínimo 8 caracteres'),
  passwordConfirmation: yup
    .string()
    .default('')
    .oneOf([yup.ref('password'), ''], 'A senha e a repetição não conferem'),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
});
