import React, { useState } from 'react';
import Container from '../container';
import * as S from './style';
import { XIcon, SelectButton } from 'svg';
import { ReportType } from 'types';
import Portal from 'components/Portal';
// import { useNavigate } from 'react-router-dom';

interface Props {
  onClose: () => void;
  postId: number;
}

const DeclarationModal: React.FC<Props> = ({
  onClose,
  // postId,
}) => {
  // const [id, setId] = useState(postId); //추후에 신고할 게시물의 아이디를 받아와서 백엔드에게 보내줄 예정
  // const navigation = useNavigate();
  const [reason, setReason] = useState('');
  const [isSelect, setIsSelect] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const report: ReportType[] = [
    {
      id: 1,
      key: 'privateInfo',
      name: '개인정보 노출',
    },
    {
      id: 2,
      key: 'abuse',
      name: '욕설/인신공격',
    },
    {
      id: 3,
      key: 'sensuality',
      name: '음란/선정성',
    },
    {
      id: 4,
      key: 'etc',
      name: '기타',
    },
    {
      id: 5,
      key: 'advertisement',
      name: '홍보성/상업적',
    },
    {
      id: 6,
      key: 'repeatability',
      name: '같은내용 반복작성',
    },
  ];

  const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const id = parseInt(target.id) - 1;

    setIsSelect((prev) => {
      const newIsSelect = [...prev];
      newIsSelect[id] = !newIsSelect[id];
      return newIsSelect;
    });
  };

  const onSubmitHandler = () => {
    if (isSelect.find((el) => el === true)) {
      if (isSelect[3] && reason.length <= 0) alert('신고 이유를 작성해주세요');
      else {
        alert('신고가 되었습니다.');
        // navigation(-1);
      }
    } else {
      alert('신고할 사유를 선택하세요.');
    }
  };

  return (
    <Portal>
      <Container>
        <S.Wrapper $etc={isSelect[3]}>
          <S.Title>
            신고 사유
            <span onClick={onClose}>
              <XIcon />
            </span>
          </S.Title>
          <S.ContentsBox $etc={isSelect[3]}>
            <S.OptionBox>
              {report.map((el, idx) => (
                <S.Option
                  key={el.id}
                  id={el.id.toString()}
                  onClick={selectHandler}>
                  <SelectButton
                    id={el.id.toString()}
                    isSelect={isSelect[idx]}
                  />
                  {el.name}
                </S.Option>
              ))}
            </S.OptionBox>
            {isSelect[3] && (
              <S.ReasonInput
                type="text-area"
                placeholder="신고 사유를 적어주세요"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            )}
          </S.ContentsBox>
          <S.SubmitButton onClick={onSubmitHandler}>신고</S.SubmitButton>
        </S.Wrapper>
      </Container>
    </Portal>
  );
};

export default DeclarationModal;
