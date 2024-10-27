import React, {
  forwardRef,
  useState,
} from 'react';
import { InputType } from 'types';
import * as S from './style';
import SearchIcon from 'svg/SearchIcon';

const Input = forwardRef<
  HTMLInputElement,
  InputType
>(
  (
    {
      title,
      placeholder,
      register,
      onChange,
      onClick,
      onBlur,
      defaultValue,
      icon = false,
      required = false,
      maxlength = 0,
      unit,
      ...props
    },
    ref,
  ) => {
    const [charCount, setCharCount] = useState(0);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const value = e.target.value;
      setCharCount(value.length);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div>
        <S.Label>
          {title && (
            <S.title>
              {title} {required && <span>*</span>}
            </S.title>
          )}
          {maxlength > 0 && (
            <S.maxlength>
              <span>{charCount}</span>/{maxlength}
            </S.maxlength>
          )}
        </S.Label>
        <S.InputBox>
          <S.Input
            type="text"
            placeholder={placeholder}
            defaultValue={defaultValue}
            maxLength={
              maxlength > 0
                ? maxlength
                : undefined
            }
            {...register}
            {...props}
            ref={ref}
            onChange={handleChange}
            onClick={onClick}
            onBlur={onBlur}
          />
          {icon && (
            <S.Icon>
              <SearchIcon />
            </S.Icon>
          )}
          {unit && <S.Unit>{unit}</S.Unit>}
        </S.InputBox>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
