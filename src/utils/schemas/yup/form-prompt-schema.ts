import * as yup from 'yup';

export const promptFormSchema = yup.object({
  prompt: yup.string().required('Informe o prompt'),
  temperature: yup.number().default(0.5),
});
