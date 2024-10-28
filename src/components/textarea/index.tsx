import React, { forwardRef, useState } from 'react';
import { TextareaType } from 'types';
import * as S from './style';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaType>(
  (
    {
      title,
      placeholder,
      register,
      onChange,
      defaultValue,
      required = false,
      maxlength = 0,
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
        <S.TextareaBox>
          <S.Textarea
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...register}
            {...props}
            ref={ref}
            onChange={(e) => setCharCount(e.target.value.length)}
          />
        </S.TextareaBox>
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
