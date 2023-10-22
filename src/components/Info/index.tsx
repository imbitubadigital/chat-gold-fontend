import * as S from './styles';
import { InfoProps } from './types';

export function Info({ label }: InfoProps) {
  return (
    <S.Container>
      <S.Txt>{label}</S.Txt>
    </S.Container>
  );
}
