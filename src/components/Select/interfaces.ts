import { HTMLProps } from 'react';

interface ItemOption {
  id: string;
  value: string;
  label: string;
}

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  selectedValue: string;

  error: string;
  loading?: boolean;
  optionData: ItemOption[];
}
