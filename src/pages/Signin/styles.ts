import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-height: calc(100vh - 3.75rem);
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  min-height: 200px;
  padding: 1rem;
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
