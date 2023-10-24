import { useCallback } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Separator } from '../Separator';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { singInSchema } from '@/utils/yup';
import { useAuth } from '@/contexts/auth';
import { CredentialProps } from '@/contexts/auth/interfaces';

export function FormLogin() {
  const { loading, signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(singInSchema),
  });

  const onSubmit = useCallback(
    async (data: CredentialProps) => {
      await signIn(data);
    },
    [signIn],
  );
  return (
    <S.Container>
      <h2>Faça seu login para entrar!</h2>
      <Separator mt={1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="E-mail"
          error={errors?.email?.message || ''}
          {...register('email')}
        />
        <Separator mt={1} />
        <Input
          type="password"
          placeholder="Senha"
          error={errors?.password?.message || ''}
          {...register('password')}
        />
        <Separator mt={1} />
        <Button
          title="Entrar"
          mode="primary"
          disabled={!isDirty || !isValid || loading}
          loading={loading}
        />
      </form>
    </S.Container>
  );
}
