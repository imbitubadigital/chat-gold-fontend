import * as S from './styles';
import { DahsBoardProps } from './types';
import { Header } from '@/components/Header';
export function DashboardTemplate({ children }: DahsBoardProps) {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
