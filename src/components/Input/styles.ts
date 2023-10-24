import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

type ContainerInputProps = {
  $error: boolean;
};
export const ContainerInput = styled.div<ContainerInputProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid
    ${(props) =>
      props.$error ? props.theme.colors.red600 : props.theme.colors.gray950};

  input {
    width: 100%;
    border: 0;
    background: transparent;
    border: 0;
    outline: none;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray950};

    &::-webkit-datetime-edit-fields-wrapper {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.red400}!important;
      font-family: 'Montserrat', sans-serif;
    }
    &::placeholder {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.gray400};
      opacity: 1;
    }
    &::-ms-input-placeholder {
      color: ${(props) => props.theme.colors.gray400};
    }
    &::-ms-input-placeholder {
      color: ${(props) => props.theme.colors.gray400};
    }
    &::-webkit-autofill {
      background-color: ${(props) => props.theme.colors.gray700};
      -webkit-text-fill-color: ${(props) => props.theme.colors.gray400};
      transition: background-color 5000s ease-in-out 0s;
    }
    &::-webkit-calendar-picker-indicator {
      opacity: 1;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%2394a3b8" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
    }
  }
`;

export const ContainerIcon = styled.div`
  margin-left: 20px;
  img {
    width: 1.5rem;
  }
`;

export const ContainerError = styled.div`
  min-height: 1.25rem;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.red600};
  }
`;
