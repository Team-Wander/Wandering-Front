import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Profile = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.span`
  ${({ theme }) => theme.fontStyle.m3};
  color: ${({ theme }) => theme.color.black};
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
