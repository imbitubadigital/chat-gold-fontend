import { HTMLProps } from 'react';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  error: string;
}
