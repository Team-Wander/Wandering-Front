import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 42.5rem;
  padding: 1rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.5rem;
  /* background: white; */
  background: lightgrey;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h2`
  color: var(--BLACK-black, #333);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
`;

export const Contents = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`;

export const Button = styled.button<{
  agreement: boolean;
}>`
  display: flex;
  padding: 0.75rem 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: 0;
  border-radius: 0.5rem;
  background: ${({ theme, agreement }) =>
    agreement
      ? theme.color.main
      : theme.color.system};
  color: ${({ theme }) => theme.color.white};
`;
