import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0;
  display: flex;
  width: 600px;
  padding: 28px 24px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.06);
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
`;

export const Title = styled.span``;

export const CloseButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
`;
