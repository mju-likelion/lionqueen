import { useEffect, useLayoutEffect } from 'react';
import XIcon from '~/components/icons/XIcon';
import Portal from '~/Portal';
import * as S from './styles';

type Props = {
  children?: React.ReactNode;
  size?: 'medium' | 'large';
  title?: React.ReactNode;
  onClose: () => void;
};

const CustomEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Modal = ({ children, title = '모달 타이틀', size = 'medium', onClose }: Props) => {
  CustomEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    return () => {
      window.document.body.style.overflowY = '';
    };
  }, []);

  return (
    <Portal>
      <S.Container>
        <S.Content size={size}>
          <S.XIconWrapper onClick={onClose}>
            <XIcon />
          </S.XIconWrapper>
          <S.Title>{title}</S.Title>
          <S.Body>{children}</S.Body>
        </S.Content>
      </S.Container>
    </Portal>
  );
};

export default Modal;
