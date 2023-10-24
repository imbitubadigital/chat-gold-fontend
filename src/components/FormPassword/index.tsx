import { useCallback } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Separator } from '../Separator';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordManagerSchema } from '@/utils/yup';
import { useAuth } from '@/contexts/auth';
import { CredentialProps } from '@/contexts/auth/interfaces';
import { NavLink } from 'react-router-dom';

export function FormPassword() {
  const { loading, signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(passwordManagerSchema),
  });

  const onSubmit = useCallback(
    async (data: CredentialProps) => {
      await signIn(data);
    },
    [signIn],
  );

  const user = {
    firstName: 'Antonio',
  };
  return (
    <S.Container>
      <h2>
        {user?.firstName
          ? `Olá ${user?.firstName}, cadastre sua senha`
          : `Olá, cadastre sua nova senha`}
      </h2>
      <Separator mt={1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Digite sua senha"
          error={errors?.password?.message || ''}
          {...register('password')}
        />
        <Separator mt={1} />
        <Input
          type="password"
          placeholder="Confirmar senha"
          error={errors?.passwordConfirmation?.message || ''}
          {...register('passwordConfirmation')}
        />
        <Separator mt={1} />
        <Button
          title="Salvar"
          mode="primary"
          disabled={!isDirty || !isValid || loading}
          loading={loading}
        />
      </form>
    </S.Container>
  );
}
