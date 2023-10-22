import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Txt = styled.p`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.gray950};
`;
