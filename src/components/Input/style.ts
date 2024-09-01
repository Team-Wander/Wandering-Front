import styled from '@emotion/styled';

export const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--GRAY-200, #eff0f2);
  border-radius: 0.75rem;
  transition: border-color 0.2s ease-in-out;

  :focus-within {
    border-color: var(--PRIMARY, #36c05c);
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding-right: 2rem;
`;

export const Icon = styled.div`
  position: absolute;
  right: 1rem;
`;
