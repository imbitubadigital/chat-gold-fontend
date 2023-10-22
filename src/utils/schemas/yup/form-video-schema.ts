import * as yup from 'yup';

export const videoFormSchema = yup.object({
  prompt: yup.string().required('Informe o prompt'),
  title: yup.string().required('Informe o título'),
  dateEvent: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .required('A data é obrigatório'),
});
