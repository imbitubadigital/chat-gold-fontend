import { Button } from '../Button';
import { Input } from '../Input';
import { Separator } from '../Separator';
import * as S from './styles';

import { NavLink } from 'react-router-dom';

import { useSignup } from '@/hooks/account/signup';

export function FormSignup() {
  const {
    loading,
    errors,
    handleSubmit,
    isDirty,
    isValid,
    onSubmit,
    register,
  } = useSignup();

  return (
    <S.Container>
      <h2>Faça seu cadastro!</h2>
      <Separator mt={1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="firstName"
          placeholder="Seu nome"
          error={errors?.firstName?.message || ''}
          {...register('firstName')}
        />

        <Separator mt={1} />

        <Input
          type="lastName"
          placeholder="Seu sobrenome"
          error={errors?.lastName?.message || ''}
          {...register('lastName')}
        />
        <Separator mt={1} />

        <Input
          placeholder="Seu e-mail"
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
            <span>Voltar para login!</span>
          </NavLink>
        </S.ContainerLink>
      </form>
    </S.Container>
  );
}
