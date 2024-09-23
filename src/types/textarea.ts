import { UseFormRegisterReturn } from 'react-hook-form';

export default interface TextareaType {
  title?: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  defaultValue?: string;
  required?: boolean;
  maxlength?: number;
}
