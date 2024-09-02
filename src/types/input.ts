import { UseFormRegisterReturn } from 'react-hook-form';

export default interface InputType {
  placeholder: string;
  register?: UseFormRegisterReturn;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  defaultValue?: string;
  icon?: boolean;
}
