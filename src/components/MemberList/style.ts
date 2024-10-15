import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray[100]};
`;
