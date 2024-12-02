import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 20px;
`;

export const Text = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.fontStyle.m3.semi};
  color: ${({ selected, theme }) =>
    selected ? theme.color.main : theme.color.black};
  border-bottom: ${({ selected, theme }) =>
    selected ? `1px solid ${theme.color.main} ` : '0'};
`;
