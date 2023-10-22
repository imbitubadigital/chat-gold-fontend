import styled from 'styled-components';
type ContainerProps = {
  $display: boolean;
};
export const Container = styled.div<ContainerProps>`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: ${(props) => (props.$display ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Txt = styled.p`
  color: ${(props) => props.theme.colors.gray50};
  font-size: 1.5rem;
  margin-top: 1rem;
`;
