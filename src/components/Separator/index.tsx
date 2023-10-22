import * as S from './styles';

type SeparatorProps = {
  mt?: number;
  mb?: number;
};
export function Separator({ mt = 0, mb = 0 }: SeparatorProps) {
  return <S.Container $marginTop={mt} $marginBottom={mb} />;
}
