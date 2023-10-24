import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;
export const Main = styled.main`
  min-height: calc(100vh -3.75rem);
  display: flex;
  justify-content: space-between;
`;
export const ContainerMenu = styled.div`
  background: ${(props) => props.theme.colors.yellow500};
  width: 300px;
  padding: 20px;

  h4 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.gray900};
    margin-bottom: 0.625rem;
  }
`;

export const Content = styled.div`
  flex: 1;
`;
