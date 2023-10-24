import styled from 'styled-components';
export const Container = styled.div`
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 1px 0 30px rgba(0, 0, 0, 0.2);
  width: 400px;

  h2 {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray900};
  }
`;

export const ContainerLink = styled.nav`
  display: flex;
  justify-content: center;

  align-items: center;
  gap: 8px;
  a {
    display: block;
    width: 100%;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.yellow700};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    text-align: center;

    span {
      font-size: 14px;
      width: 100%;
      font-weight: 600;
    }

    &:hover {
      text-decoration: underline;
      span {
        color: ${(props) => props.theme.colors.yellow600};
      }
    }
  }
`;
