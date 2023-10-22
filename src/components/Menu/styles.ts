import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 32px;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.white};
    border: 1px solid transparent;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    span {
      font-size: 16px;
    }

    &:hover {
      span {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;
