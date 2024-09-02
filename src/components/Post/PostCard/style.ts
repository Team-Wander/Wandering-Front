import styled from '@emotion/styled';

export const Container = styled.div`
  width: 28.15%;
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #f5f6f8;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
`;

export const AuthorDataBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Author = styled.div`
  color: #8f9094;
`;

export const Contour = styled.div`
  width: 0.0625rem;
  height: 1.25rem;
  border-radius: 0.3125rem;
  background: #d9d9d9;
`;

export const AuthorData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  span {
    color: #b4b5b7;
  }
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #b4b5b7;
`;

export const Title = styled.div`
  color: #333;
`;
