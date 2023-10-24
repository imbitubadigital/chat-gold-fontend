import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  a {
    width: 100%;
    height: 32px;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.gray950};
    border: 1px solid transparent;
    text-decoration: none;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    span {
      font-size: 1.125rem;
      width: 100%;
      font-weight: 600;
    }

    &:hover {
      span {
        color: ${(props) => props.theme.colors.gray800};
      }
    }
  }
`;
