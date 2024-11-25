import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 600px;
  height: 520px;
  padding: 28px 24px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px #00000014;
  border-radius: 8px;

  svg {
    position: unset;
  }
`;
export const Title = styled.h1`
  margin-top: 28px;
  font-size: 24px;
  font-weight: 600;
`;
export const SubTitle = styled.h2`
  margin-top: 8px;
  font-size: 18px;
  color: #a5a6a9;
  font-weight: 400;
`;
