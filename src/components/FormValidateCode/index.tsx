import { LocationProps, useCheckCode } from '@/hooks/account/check-code';
import { Button } from '../Button';

import { Separator } from '../Separator';
import * as S from './styles';

import { NavLink, Navigate, useLocation } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import { useAuthStore } from '@/store/auth';

export function FormValidateCode() {
  const location = useLocation();

  const { email, firstName, isCreate } = location.state as LocationProps;
  const {
    codeVerification,
    error,
    handleResendCode,
    loading,
    settingCode,
    code,
    timer,
  } = useCheckCode({ email, firstName, isCreate });

  const token = useAuthStore((store) => store.state.token);

  if (token) {
    return <Navigate to="/painel/home" />;
  }
  return (
    <S.Container>
      <h2>Confirmação de código de acesso!</h2>

      <S.InfoInstruction>
        Olá {!!firstName && <b>{firstName}</b>}, acesse seu email <b>{email}</b>
        ,
        <span>
          copie o código de confirmação que enviamos para você e informe abaixo:
        </span>
      </S.InfoInstruction>

      <Separator mt={1} />
      <form>
        <VerificationInput
          length={4}
          validChars="0-9"
          autoFocus
          onChange={settingCode}
          placeholder="0"
          classNames={{
            container: 'container',
            character: 'character',
            characterInactive: 'character--inactive',
            characterSelected: 'character--selected',
          }}
        />
        <Separator mt={2} />
        <Button
          type="button"
          mode="primary"
          title="Confirmar Código"
          onClick={codeVerification}
          disabled={!!error || code.length < 4 || loading}
          loading={loading}
        />

        <Separator mt={2} />
        <S.ContainerLink>
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleResendCode();
            }}
          >
            <span>
              {timer > 0
                ? `Reenviar em ${timer} seg${timer > 1 ? 's' : ''}!`
                : 'Não recebeu o código? Clique para reenviar!'}
            </span>
          </NavLink>
        </S.ContainerLink>
      </form>
    </S.Container>
  );
}
