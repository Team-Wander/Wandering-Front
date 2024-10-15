import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Post = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fontStyle.m3}
  color: ${({ theme }) => theme.color.gray[900]};
`;

export const Dot = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 10rem;
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const Author = styled.div`
  ${({ theme }) => theme.fontStyle.label}
  color: ${({ theme }) => theme.color.gray[600]};
`;
