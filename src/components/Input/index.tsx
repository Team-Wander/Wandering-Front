import React, { forwardRef, useState } from 'react';
import { InputType } from 'types';
import * as S from './style';
import SearchIcon from 'svg/SearchIcon';

const Input = forwardRef<HTMLInputElement, InputType>(
  (
    {
      title,
      placeholder,
      register,
      onChange,
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
            {...register}
            {...props}
            ref={ref}
            onChange={(e) => setCharCount(e.target.value.length)}
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
