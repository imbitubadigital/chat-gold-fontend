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
