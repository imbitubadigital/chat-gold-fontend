import * as yup from 'yup';

export const promptCrudFormSchema = yup.object({
  prompt: yup.string().required('Informe o prompt'),
  title: yup.string().required('Informe o título'),
});
