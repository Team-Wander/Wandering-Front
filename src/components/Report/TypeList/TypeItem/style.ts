import styled from '@emotion/styled';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.color.system};
  border-radius: 8px;
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Mate = styled.div`
  color: ${({ theme }) => theme.color.system};
`;
