import { ButtonLinkProps } from './interfaces';
import { CircleNotch } from 'phosphor-react';
import * as S from './styles';
import { useTheme } from 'styled-components';

export function Button({
  title,
  mode = 'primary',

  disabled = false,
  loading = false,

  ...rest
}: ButtonLinkProps) {
  const { colors } = useTheme();
  return (
    <S.Button mode={mode} disabled={disabled} {...rest}>
      {loading ? (
        <CircleNotch color={colors.white} className="spinner" size={20} />
      ) : (
        <span>{title}</span>
      )}
    </S.Button>
  );
}
