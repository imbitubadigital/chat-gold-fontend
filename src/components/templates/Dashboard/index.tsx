import { Menu } from '@/components/Menu';
import * as S from './styles';
import { DahsBoardProps } from './types';
import { Header } from '@/components/Header';
export function DashboardTemplate({ children }: DahsBoardProps) {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.ContainerMenu>
          <h4>Salas</h4>
          <Menu />
        </S.ContainerMenu>
        <S.Content>{children}</S.Content>
      </S.Main>
    </S.Container>
  );
}
