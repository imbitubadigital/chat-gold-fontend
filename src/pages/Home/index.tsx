import { useState } from 'react';
import * as S from './styles';
import { DashboardTemplate } from '@/components/templates/Dashboard';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const [room, setRoom] = useState('');
  function handleTeste() {
    if (room) {
      console.log('entrou aqui');
      navigate(`/sala?room=${room}`);
    }
  }
  return (
    <DashboardTemplate>
      <S.Container>
        <h1>Home</h1>
        <div>
          <input
            type="text"
            name="room"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button type="button" onClick={handleTeste}>
            Testar
          </button>
        </div>
      </S.Container>
    </DashboardTemplate>
  );
}
