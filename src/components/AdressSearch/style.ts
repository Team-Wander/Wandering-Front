import styled from '@emotion/styled';

export const SearchBox = styled.div`
  position: relative;
`;

export const SearchResultsContainer = styled.div`
  position: absolute;
  top: 79.5px;
  width: 100%;
  border: 1px solid #eff0f2;
  border-radius: 0.75rem;
  padding: 28px 24px 0;
  box-sizing: border-box;
  max-height: 244px;
  overflow-y: scroll;
  z-index: 1;
  background-color: #fff;
`;
export const SearchResultItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eff0f2;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  color: #b4b5b7;
  span {
    color: black;
  }
`;
export const BottomBlur = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: rgba(255, 255, 255, 0.8);
  filter: blur(4px);
  pointer-events: none;
  z-index: 2;
`;
