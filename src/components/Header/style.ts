import styled from '@emotion/styled';

export const Positioner = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const Container = styled.header`
  width: 68.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    width: 100%;
  }
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
  z-index: 99;
`;

export const SearchBox = styled.div<{ focus: boolean }>`
  position: relative;
  width: 100%;
  max-width: 33.75rem;
  padding: 0.75rem 1.25rem;
  border: ${({ focus }) => (focus ? '0' : '1px solid #eff0f2')};
  background: #fff;
  border-radius: ${({ focus }) => (focus ? '0.75rem 0.75rem 0 0' : '0.75rem')};
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  z-index: 999;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  z-index: 99;
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
