import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const OptionBox = styled.ul<{
  selected: boolean;
}>`
  display: ${({ selected }) =>
    selected ? 'flex' : 'none'};
  flex-direction: column;

  position: absolute;
  border: 1px solid
    ${({ theme }) => theme.color.gray[100]};
  border-radius: 0.75rem;

  background-color: ${({ theme }) =>
    theme.color.white};

  padding: 0.75rem 1.25rem;
  margin-top: 2rem;
  gap: 1.25rem;
`;

export const Option = styled.li<{
  option: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme, option }) =>
    option === 'normal'
      ? theme.color.main
      : option === 'indefinitely_ban'
        ? theme.color.system
        : theme.color.black};
`;
