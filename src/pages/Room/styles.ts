import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  min-height: calc(100vh - 3.75rem);
  padding: 1rem 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray900};
  }

  div {
    width: 150px;
  }
`;
export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.gray700};
  width: 22.5rem;
  padding: 1rem;
`;

export const TextareaPrompt = styled.textarea`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray400};
  width: 100%;
  border-radius: 4px;
  resize: none;
  padding: 1rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray950};
  &::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray500};
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.colors.gray500};
  }
  ::-ms-input-placeholder {
    color: ${(props) => props.theme.colors.gray500};
  }
`;

export const ContainerButton = styled.div`
  width: 300px;
  margin-top: 32px;
`;
