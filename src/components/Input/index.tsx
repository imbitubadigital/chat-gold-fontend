import { forwardRef, ForwardRefRenderFunction } from 'react';

import { InputProps } from './interfaces';
import * as S from './styles';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, ...rest }: InputProps,
  ref,
) => {
  return (
    <S.Container>
      <S.ContainerInput $error={!!error}>
        <input type="text" ref={ref} {...rest} />
      </S.ContainerInput>
      <S.ContainerError>{!!error && <span>{error}</span>}</S.ContainerError>
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
