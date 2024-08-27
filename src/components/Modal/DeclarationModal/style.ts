import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.4);
`;

export const Wrapper = styled.div<{
  $etc: boolean;
}>`
  display: flex;
  width: 332px;
  height: ${({ $etc }: { $etc: boolean }) =>
    $etc ? "396px" : "358px"};
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  border-radius: 8px;
  background: #fff;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

export const ContentsBox = styled.div<{
  $etc: boolean;
}>`
  display: flex;
  width: 100%;
  height: ${({ $etc }: { $etc: boolean }) =>
    $etc ? "238px" : "176px"};
  flex-wrap: wrap;
`;

export const OptionBox = styled.div`
  display: flex;
  width: 100%;
  height: 176px;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
`;

export const Option = styled.div`
  display: flex;
  height: 26px;
  align-items: center;
  gap: 12px;
`;

export const ReasonInput = styled.input`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border: 0;
  border-radius: 8px;
  background: #f5f6f8;
  outline: none;

  ::placeholder {
    color: #b4b5b7;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background: #e53a3a;
  color: white;
  cursor: pointer;
`;
