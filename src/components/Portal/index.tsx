import ReactDOM from 'react-dom';
import React, {
  MouseEvent,
  useState,
  cloneElement,
  useEffect,
  ReactElement,
} from 'react';
import * as S from './style';

interface Props {
  children: ReactElement;
  onClose?: () => void;
}

const Portal = ({ children, onClose }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  const portal = document.getElementById('modal');
  if (!portal) throw new Error('not found modal');

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === 'undefined') return <></>;

  return mounted ? (
    ReactDOM.createPortal(
      <S.Wrapper onClick={onClose}>
        {cloneElement(children, { onClick })}
      </S.Wrapper>,
      portal,
    )
  ) : (
    <></>
  );
};

export default Portal;
