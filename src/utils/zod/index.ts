import { z } from 'zod';

export const passwordManagerFormSchema = z
  .object({
    password: z.string().min(8, 'Deve ter no mínimo 8 caracteres'),
    passwordConfirmation: z.string(),
  })
  .refine((fields) => fields.password === fields.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: 'A senha e a repetição não conferem',
  });
