import { NavLink, useSearchParams } from 'react-router-dom';
import * as S from './styles';
import { useRoom } from '@/hooks/room';
import { useSocket } from '@/contexts/socket';
import { useAuthStore } from '@/store/auth';
import { Fragment } from 'react';
import { UserCircleGear, UserCircle } from 'phosphor-react';

export function Menu() {
  const { loading, rooms } = useRoom();
  const { socket } = useSocket();
  const user = useAuthStore((store) => store.state.user);
  const [searchParams] = useSearchParams();

  const roomName = searchParams.get('name');
  const roomId = searchParams.get('id');

  const handleClick = () => {
    if (roomId) {
      socket.emit('leaveRoom', {
        userId: user.id,
        roomId,
        type: 'leave',
        content: 'Saiu da sala',
      });
    }
  };

  return (
    <S.Container>
      {!loading &&
        rooms?.map((room) => (
          <Fragment key={room.id}>
            <NavLink
              to={`/panel/sala?name=${room.name}&id=${room.id}`}
              onClick={handleClick}
              className={room.name === roomName ? 'menu-active' : 'menu-normal'}
            >
              <span>{room.name}</span>
            </NavLink>
            {room.joinedRoom.length > 0 && (
              <S.Content>
                {room.joinedRoom.map((joinedRoom) => (
                  <p key={joinedRoom.id}>
                    {user.id === joinedRoom.user.id ? (
                      <UserCircleGear size={24} />
                    ) : (
                      <UserCircle size={24} />
                    )}

                    {`${joinedRoom.user.firstName}`}
                  </p>
                ))}
              </S.Content>
            )}
          </Fragment>
        ))}
    </S.Container>
  );
}
