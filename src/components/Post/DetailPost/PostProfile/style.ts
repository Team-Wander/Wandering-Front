import styled from '@emotion/styled';

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
