import styled from '@emotion/styled';

export const TextareaBox = styled.div`
  position: relative;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--GRAY-200, #eff0f2);
  border-radius: 0.75rem;
  transition: border-color 0.2s ease-in-out;
  box-sizing: border-box;
  :focus-within {
    border-color: var(--PRIMARY, #36c05c);
  }
  height: 188px;
`;

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  resize: none;
`;

export const title = styled.div`
  span {
    color: #36c05c;
  }
`;
export const maxlength = styled.div`
  span {
    color: #36c05c;
  }
`;
export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
