import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export default interface InputType {
  title?: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  icon?: boolean;
  required?: boolean;
  maxlength?: number;
  unit?: string;
}
