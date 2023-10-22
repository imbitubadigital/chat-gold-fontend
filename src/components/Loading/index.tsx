import { CircleNotch } from 'phosphor-react';
import * as S from './styles';
import { LoadingProps } from './types';
import { useTheme } from 'styled-components';

export function Loading({ isShow, label }: LoadingProps) {
  const { colors } = useTheme();
  return (
    <S.Container $display={isShow}>
      <CircleNotch color={colors.white} className="spinner" size={100} />
      <S.Txt>{label}</S.Txt>
    </S.Container>
  );
}
