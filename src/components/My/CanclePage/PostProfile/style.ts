import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const Name = styled.span`
  ${({ theme }) => theme.fontStyle.label};
  color: ${({ theme }) => theme.color.gray[600]};
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const DataText = styled.span`
  ${({ theme }) => theme.fontStyle.label};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const Dot = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  background-color: #b4b5b7;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailButton = styled.div``;

export const DetailModal = styled.div`
  position: absolute;
  left: -78px;
  top: 40px;
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
`;

export const WarningText = styled.div`
  ${({ theme }) => theme.fontStyle.m3.reg}
  color: ${({ theme }) => theme.color.system};
`;
