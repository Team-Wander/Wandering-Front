import styled from '@emotion/styled';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 8px;
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledCheckbox = styled.input`
  opacity: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.div<{
  checked: boolean;
}>`
  width: 24px;
  height: 24px;
  background: ${(props) => (props.checked ? '#36C05C' : '#EFF0F2')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms;
  cursor: pointer;

  svg {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const LabelText = styled.label`
  margin-left: 8px;
  cursor: pointer;
`;
