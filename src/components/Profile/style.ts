import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const ProfileImg = styled.img`
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.color.gray[800]};
  font-size: 1rem;
  ${({ theme }) => theme.fontStyle.m3}
`;

export const School = styled.h2`
  color: ${({ theme }) => theme.color.gray[600]};
  font-size: 1rem;
  ${({ theme }) => theme.fontStyle.m3}
`;
