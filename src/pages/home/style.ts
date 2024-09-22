import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 1.63rem 21% 0;
  display: flex;
  flex-direction: column;
  gap: 2.88rem;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 0.75rem;
  background: var(--GRAY-100, #f5f6f8);
  border: 0;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const FilterContainer = styled.div`
  position: relative;
`;
