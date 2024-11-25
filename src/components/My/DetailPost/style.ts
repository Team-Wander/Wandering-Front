import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 1.75rem 1.5rem;
  max-width: 37.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray[100]};
  border-radius: 0.5rem;
`;

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fontStyle.h4.semi}
  color: ${({ theme }) => theme.color.black};
`;

export const Content = styled.div`
  ${({ theme }) => theme.fontStyle.m3.reg}
  color: ${({ theme }) => theme.color.black};
`;

export const SNSContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const SNSText = styled(Content)``;

export const Deadline = styled(Content)``;

export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const Remain = styled.span`
  ${({ theme }) => theme.fontStyle.m3.reg}
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const TagReportContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReportButton = styled.div`
  cursor: pointer;
`;

export const EditButton = styled.button`
  ${({ theme }) => theme.fontStyle.m3.semi};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.gray[600]};
  display: flex;
  padding: 0.75rem 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
`;

export const Line = styled.div`
  background: ${({ theme }) => theme.color.gray[200]};
`;

export const ApplicantList = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  gap: 28px;
`;

export const ApplicantContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileText = styled.div`
  display: flex;
  gap: 8px;
`;

export const Name = styled.span`
  ${({ theme }) => theme.fontStyle.m2.semi};
  color: ${({ theme }) => theme.color.black};
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const DataText = styled.span`
  ${({ theme }) => theme.fontStyle.label};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const Dot = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  background-color: #b4b5b7;
`;

export const OutButton = styled.div`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.system};
  color: ${({ theme }) => theme.color.white};
`;
