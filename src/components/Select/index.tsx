import * as S from './styles';
import { SelectProps } from './interfaces';
import { forwardRef, ForwardRefRenderFunction } from 'react';

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  {
    error,

    optionData,
    loading = false,
    selectedValue,
    ...rest
  }: SelectProps,
  ref,
) => {
  const selected = selectedValue;

  return (
    <S.Container>
      <S.ContainerSelect $isError={!!error}>
        <select value={selected} disabled={loading} ref={ref} {...rest}>
          <option value="">{loading ? 'Carregando...' : 'Selecione'}</option>
          {optionData.length > 0 &&
            optionData.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
        </select>
      </S.ContainerSelect>
      <S.Error>{error || ''}</S.Error>
    </S.Container>
  );
};

export const Select = forwardRef(SelectBase);
