import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 37.5rem;
  width: 100%;
  padding: 1rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeButton = styled.div`
  cursor: pointer;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fontStyle.m2}
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const Empty = styled.div`
  width: 24px;
  height: 25px;
`;
