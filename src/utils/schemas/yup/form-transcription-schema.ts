import * as yup from 'yup';

export const transcriptionFormSchema = yup.object({
  transcription: yup.string().required('Informe o transcrição'),
  title: yup.string().required('Informe o título'),
  dateEvent: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .required('A data é obrigatório'),
});
