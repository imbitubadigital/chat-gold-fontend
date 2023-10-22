import * as S from './styles';
import { DashboardTemplate } from '@/components/templates/Dashboard';

export function Home() {
  return (
    <DashboardTemplate>
      <S.Container>
        <h1>Home</h1>
      </S.Container>
    </DashboardTemplate>
  );
}
