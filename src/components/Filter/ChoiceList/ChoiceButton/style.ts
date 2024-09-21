import styled from '@emotion/styled';

export const Button = styled.button<{
  clicked: boolean;
}>`
  color: ${({ clicked }) =>
    clicked ? '#ffffff' : '#8f9094'};

  display: flex;
  padding: 4px 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ clicked }) =>
      clicked ? null : '#eff0f2'};
  background-color: ${({ clicked }) =>
    clicked ? '#36C05C' : '#ffffff'};
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
