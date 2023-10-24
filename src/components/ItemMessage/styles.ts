import styled, { css } from 'styled-components';
type ContainerProps = {
  $type: 'me' | 'members';
};
export const Container = styled.div<ContainerProps>`
  margin-bottom: 1rem;
  display: flex;
  justify-content: ${(props) =>
    props.$type === 'members' ? 'flex-start' : 'flex-end'};
  align-items: center;
`;
type ContentProps = {
  $type: 'me' | 'members';
};

export const Content = styled.div<ContentProps>`
  padding: 1rem 1.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  max-width: 70%;
  p {
    width: 100%;
  }
  ${(props) =>
    props.$type === 'members'
      ? css`
          background: ${props.theme.colors.gray100};
          border-radius: 20px;
          border-bottom-left-radius: 4px;
          p {
            color: ${(props) => props.theme.colors.gray700};
            white-space: pre-line;
          }
        `
      : css`
          background: linear-gradient(
            ${props.theme.colors.gray800},
            ${props.theme.colors.gray800}
          );
          border-radius: 20px;
          border-bottom-right-radius: 4px;
          p {
            color: ${(props) => props.theme.colors.white};
            white-space: pre-line;
          }
        `};
`;

export const Header = styled.div<ContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 5px;
  span {
    font-size: 0.75rem;
    color: ${(props) =>
      props.$type === 'members'
        ? props.theme.colors.gray700
        : props.theme.colors.white};
  }
  small {
    font-size: 0.625rem;
    color: ${(props) =>
      props.$type === 'members'
        ? props.theme.colors.gray700
        : props.theme.colors.white};
  }
`;
