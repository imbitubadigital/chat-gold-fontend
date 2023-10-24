import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.75rem;
  background: ${(props) => props.theme.colors.yellow600};
  height: 3.75rem;

  h1 {
    color: ${(props) => props.theme.colors.gray950};
    font-size: 1.45rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.3125rem;
    }
  }
  p {
    color: ${(props) => props.theme.colors.gray950};
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    > svg {
      margin-right: 0.3125rem;
    }
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  Button {
    border: 0;
    background: transparent;
  }
`;
