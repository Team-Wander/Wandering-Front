import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  padding: 1rem 21%;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBox = styled.div`
  width: 13.5rem;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding-right: 2rem;
`;

export const SearchBox = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 33.75rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid #eff0f2;
  background: #fff;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  z-index: 999;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0;
`;

export const IconBox = styled.div`
  cursor: pointer;
`;

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
