import styled from 'styled-components';
import CaretDown from '@/assets/caret-down.svg';

export const Container = styled.div`
  margin-bottom: 4px;
`;

interface ContainerInputProps {
  $isError: boolean;
}
export const ContainerSelect = styled.div<ContainerInputProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border: 1px;
  border-radius: 6px;
  border-style: solid;
  background: rgba(81, 96, 113, 0.22);
  border-color: ${(props) =>
    props.$isError ? props.theme.colors.red600 : props.theme.colors.gray500};

  select {
    border: 0;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    padding: 0 1.25rem;
    font-size: 1rem;
    background: url(${CaretDown}) no-repeat right;
    background-size: 1.5rem;
    -webkit-appearance: none;
    background-position-x: 98%;
    color: ${(props) => props.theme.colors.gray50};

    border-color: ${(props) => props.theme.colors.gray500};

    outline: none;

    :focus {
      box-shadow: 0 0 0 1.5px ${(props) => props.theme.colors.red600};
    }

    :-webkit-autofill {
      background-color: ${(props) => props.theme.colors.gray200};
      -webkit-text-fill-color: ${(props) => props.theme.colors.gray400};
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export const Error = styled.span`
  color: ${(props) => props.theme.colors.red900};
  font-size: 12px;
  display: block;
  min-height: 1.5rem;
  line-height: 1.5rem;
`;
