import { Button } from '../Button';

import { Separator } from '../Separator';
import * as S from './styles';

import { NavLink } from 'react-router-dom';
import VerificationInput from 'react-verification-input';

export function FormValidateCode() {
  const firstName = 'Antonio';
  const email = 'antonio@teste.com';

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
          // onChange={settingCode}
          onChange={() => {}}
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
          // onClick={codeVerification}
          // disabled={!!error || code.length < 4 || loading}
          // loading={loading}
        />

        {/* <Button
          type="button"
          mode="secondary"
          title="Não recebeu o código? Clique para reenviar"
          // disabled={timer > 0}
          // title={
          //   timer > 0
          //     ? `Reenviar em ${timer} seg${timer > 1 ? 's' : ''}!`
          //     : 'Não recebeu o código? Clique para reenviar!'
          // }
          // onClick={handleResendCode}
        /> */}
        <Separator mt={2} />
        <S.ContainerLink>
          <NavLink
            to="/cadastro"
            onClick={(e) => {
              e.preventDefault();
              console.log('aaa');
            }}
          >
            <span>Não recebeu o código? Clique para reenviar!</span>
          </NavLink>
        </S.ContainerLink>
      </form>
    </S.Container>
  );
}
