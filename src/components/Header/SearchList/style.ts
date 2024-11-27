import styled from '@emotion/styled';

export const Wrapper = styled.div<{ focus: boolean }>`
  width: 100%;
  max-width: 33.75rem;
  align-self: stretch;
  display: ${({ focus }) => (focus ? 'flex' : 'none')};
  padding: 3rem 1.25rem 0.75rem;
  position: absolute;
  top: 0;
  left: -0.5px;
  border: 1px solid #eff0f2;
  background: #fff;
  border-radius: 0.75rem;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HeaderText = styled.p`
  ${({ theme }) => theme.fontStyle.label};
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
