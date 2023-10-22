import { ButtonHTMLAttributes } from 'react';

export type ModeBtn = 'primary' | 'secondary' | 'success' | 'tertiary';
export interface ButtonLinkProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  mode?: ModeBtn;

  disabled?: boolean;

  loading?: boolean;
}
