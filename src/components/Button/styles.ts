import styled, { DefaultTheme, css } from 'styled-components';
import { ModeBtn } from './interfaces';

interface ButtonProps {
  mode: ModeBtn;

  disabled: boolean;
}

function getBackground(mode: ModeBtn, theme: DefaultTheme) {
  switch (mode) {
    case 'primary':
      return theme.colors.gray950;
    case 'secondary':
      return theme.colors.gray500;
    case 'success':
      return theme.colors.green900;
    case 'tertiary':
      return theme.colors.yellow800;

    default:
      return theme.colors.green800;
  }
}
function getColor(mode: ModeBtn, theme: DefaultTheme) {
  switch (mode) {
    case 'primary':
      return theme.colors.gray200;
    case 'secondary':
      return theme.colors.gray200;
    case 'success':
      return theme.colors.gray200;
    case 'tertiary':
      return theme.colors.gray200;

    default:
      return theme.colors.gray800;
  }
}

export const Button = styled.button<ButtonProps>`
  background: ${(props) => getBackground(props.mode, props.theme)};
  height: 3.125rem;
  border: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  cursor: pointer;

  &&:disabled {
    cursor: not-allowed;
  }

  span {
    color: ${(props) => getColor(props.mode, props.theme)};
    font-size: 1rem;
  }

  transition: all ease-in-out 0.5s;

  ${(props) =>
    props.disabled &&
    css`
      background: rgba(132, 146, 164, 0.5);
    `}

  &:hover {
    opacity: ${(props) => (!props.disabled ? 0.8 : 1)};
  }
`;
