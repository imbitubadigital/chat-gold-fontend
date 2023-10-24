import { Button } from '../Button';
import { Input } from '../Input';
import { Separator } from '../Separator';
import * as S from './styles';

import { useAuthStore } from '@/store/auth';
import { usePasswordManager } from '@/hooks/account/password';
import { Navigate, useLocation } from 'react-router-dom';
export type LocationProps = {
  email: string;
  firstName: string;
  code: string;
  isCreate: boolean;
};
export function FormPassword() {
  const location = useLocation();
  const user = useAuthStore((store) => store.state.user);
  const { email, code, isCreate } = location.state as LocationProps;
  const {
    onSubmit,
    errors,
    handleSubmit,
    isDirty,
    isValid,
    loading,
    register,
    token,
  } = usePasswordManager({
    code,
    email,
    origin: isCreate ? 'signup' : 'forgot',
  });

  if (token) {
    return <Navigate to="/panel/home" />;
  }

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
          type="password"
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
