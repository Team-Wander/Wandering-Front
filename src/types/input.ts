import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export default interface InputType {
  id?: string;
  title?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  defaultValue?: string;
  icon?: boolean;
  required?: boolean;
  maxlength?: number;
  unit?: string;
}
