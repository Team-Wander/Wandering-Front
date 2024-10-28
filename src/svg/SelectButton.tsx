import React from 'react';

interface Props {
  id: string;
  isSelect: boolean;
}

const SelectButton = ({ id, isSelect }: Props) => {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <rect
        id={id}
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill={isSelect ? '#36C05C' : '#DBDCDE'}
      />
      <path
        id={id}
        d="M7 11L10.3333 15L17 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SelectButton;
