import { Button } from '../Button';
import { Input } from '../Input';
import { Separator } from '../Separator';
import * as S from './styles';

export function FormLogin() {
  return (
    <S.Container>
      <h2>Faça seu login para entrar!</h2>
      <Separator mt={1} />
      <form>
        <Input placeholder="E-mail" error="" />
        <Separator mt={1} />
        <Input type="password" placeholder="Senha" error="aaa" />
        <Separator mt={1} />
        <Button
          title="Entrar"
          mode="primary"
          disabled={false}
          loading={false}
        />
      </form>
    </S.Container>
  );
}
