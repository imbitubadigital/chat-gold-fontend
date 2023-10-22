import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.75rem;
  background: ${(props) => props.theme.colors.gray900};
  height: 3.75rem;

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
  }
`;
