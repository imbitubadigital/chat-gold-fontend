import { useAuthStore } from '@/store/auth';
import * as S from './styles';
import { UserCircle, ChatCenteredText, SignOut } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useAuth } from '@/contexts/auth';

export function Header() {
  const user = useAuthStore((store) => store.state.user);
  const { signOut } = useAuth();
  const { colors } = useTheme();
  const { firstName, lastName } = user;
  return (
    <S.Container>
      <h1>
        <ChatCenteredText size={40} /> ChatGold
      </h1>
      <S.ContainerRight>
        <p>
          <UserCircle size={24} color={colors.gray950} />
          {firstName} {lastName}
        </p>
        <button type="button">
          <SignOut
            size={24}
            color={colors.gray950}
            onClick={() => signOut({ message: '' })}
          />
        </button>
      </S.ContainerRight>
    </S.Container>
  );
}
