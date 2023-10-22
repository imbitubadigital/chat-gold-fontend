import { Menu } from '../Menu';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <h1>GravATA</h1>
      <Menu />
    </S.Container>
  );
}
