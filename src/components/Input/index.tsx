import React, { forwardRef } from 'react';
import { InputType } from 'types';
import * as S from './style';
import SearchIcon from 'svg/SearchIcon';

const Input = forwardRef<
  HTMLInputElement,
  InputType
>(
  (
    {
      placeholder,
      register,
      onChange,
      defaultValue,
      icon = false,
      ...props
    },
    ref,
  ) => {
    return (
      <S.InputBox>
        <S.Input
          type="text"
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...register}
          {...props}
          ref={ref}
          onChange={(e) => onChange?.(e)}
        />
        {icon && (
          <S.Icon>
            <SearchIcon />
          </S.Icon>
        )}
      </S.InputBox>
    );
  },
);

Input.displayName = 'Input';

export default Input;
