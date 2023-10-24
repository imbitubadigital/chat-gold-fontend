import { Button } from '../Button';
import { Input } from '../Input';
import { Separator } from '../Separator';
import * as S from './styles';

import { NavLink } from 'react-router-dom';

import { useForgotPassword } from '@/hooks/account/forgot-password';

export function FormForgot() {
  const {
    errors,
    onSubmit,
    handleSubmit,
    isDirty,
    isValid,
    loading,
    register,
  } = useForgotPassword();

  return (
    <S.Container>
      <h2>
        Para redefinir sua senha, informe o email cadastrado na sua conta, e
        vamos enviar um e-mail com as instruções.
      </h2>
      <Separator mt={1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="E-mail"
          error={errors?.email?.message || ''}
          {...register('email')}
        />

        <Separator mt={1} />
        <Button
          title="Entrar"
          mode="primary"
          disabled={!isDirty || !isValid || loading}
          loading={loading}
        />
        <Separator mt={2} />
        <S.ContainerLink>
          <NavLink to={`/`}>
            <span>Voltar para o login!</span>
          </NavLink>
        </S.ContainerLink>
      </form>
    </S.Container>
  );
}
