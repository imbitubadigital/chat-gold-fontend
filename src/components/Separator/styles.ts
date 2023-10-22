import styled from 'styled-components';
type ContainerProps = {
  $marginTop: number;
  $marginBottom: number;
};
export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 2px 0 inset rgba(255, 255, 255, 0.1);
  margin-top: ${(props) => props.$marginTop}rem;
  margin-bottom: ${(props) => props.$marginBottom}rem;
`;
