import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 400px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const CloseButton = styled.div``;

export const Title = styled.div`
  ${({ theme }) => theme.fontStyle.m1.semi};
  color: ${({ theme }) => theme.color.black};
`;

export const ChangeButton = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 0px 8px;
  background: ${({ theme }) => theme.color.gray[400]};
`;

export const ImageBack = styled.div`
  position: relative;
  width: 352px;
  height: 345px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray[300]};
`;

export const CheckButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fontStyle.m3.semi};
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
