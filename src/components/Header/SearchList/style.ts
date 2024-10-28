import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HeaderText = styled.p`
  ${({ theme }) => theme.fontStyle.label}
  color: ${({ theme }) => theme.color.gray[400]}
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
