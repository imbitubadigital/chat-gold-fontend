import { NavLink } from 'react-router-dom';
import * as S from './styles';

export function Menu() {
  return (
    <S.Container>
      <NavLink
        to={'/'}
        className={({ isActive }) => (isActive ? 'menu-active' : 'menu-normal')}
      >
        <span>Vídeo</span>
      </NavLink>
      <NavLink
        to={'/transcrever'}
        className={({ isActive }) => (isActive ? 'menu-active' : 'menu-normal')}
      >
        <span>Transcrever</span>
      </NavLink>
      <NavLink
        to={'/gravar-audio'}
        className={({ isActive }) => (isActive ? 'menu-active' : 'menu-normal')}
      >
        <span>Gravar áudio</span>
      </NavLink>
      <NavLink
        to={'/comandos'}
        className={({ isActive }) => (isActive ? 'menu-active' : 'menu-normal')}
      >
        <span>Prompts</span>
      </NavLink>
    </S.Container>
  );
}
