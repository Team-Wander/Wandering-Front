import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.div``;

export const DetailModal = styled.div`
  position: absolute;
  left: -118px;
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
`;

export const Text = styled.div`
  ${({ theme }) => theme.fontStyle.m3.reg}
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
`;

export const WarningText = styled(Text)`
  color: ${({ theme }) => theme.color.system};
`;
