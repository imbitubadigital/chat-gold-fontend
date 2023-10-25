import { useAuthStore } from '@/store/auth';
import * as S from './styles';
import { UserCircle, ChatCenteredText, SignOut } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useAuth } from '@/contexts/auth';
import { useSocket } from '@/contexts/socket';
import { useSearchParams } from 'react-router-dom';

export function Header() {
  const user = useAuthStore((store) => store.state.user);
  const [searchParams] = useSearchParams();
  const { signOut } = useAuth();
  const { socket } = useSocket();
  const roomId = searchParams.get('id');

  const { colors } = useTheme();
  const { firstName, lastName, id } = user;

  function handleLeaveRoomAndSignout() {
    socket.emit('leaveRoom', {
      userId: id,
      roomId,
      type: 'leave',
      content: 'Saiu da sala',
    });
    signOut({ message: '' });
  }
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
            onClick={handleLeaveRoomAndSignout}
          />
        </button>
      </S.ContainerRight>
    </S.Container>
  );
}
