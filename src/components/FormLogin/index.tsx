import { Button } from '../Button';
import { Input } from '../Input';
import { Separator } from '../Separator';
import * as S from './styles';
import { NavLink } from 'react-router-dom';
import { useSignin } from '../../hooks/account/signin';

export function FormLogin() {
  const {
    errors,
    handleSubmit,
    isDirty,
    isValid,
    register,
    loading,
    onSubmit,
  } = useSignin();

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

        <S.ContainerForgot>
          <NavLink to={`/recuperar-senha`}>
            <span>Esqueceu a senha?</span>
          </NavLink>
        </S.ContainerForgot>
        <Separator mt={1} />
        <Button
          title="Entrar"
          mode="primary"
          disabled={!isDirty || !isValid || loading}
          loading={loading}
        />
        <Separator mt={2} />
        <S.ContainerLink>
          <NavLink to={`/cadastro`}>
            <span>Ainda nao tem conta? Cadastre-se!</span>
          </NavLink>
        </S.ContainerLink>
      </form>
    </S.Container>
  );
}
