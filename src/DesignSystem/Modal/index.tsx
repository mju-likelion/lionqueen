import React, { useEffect, useLayoutEffect } from 'react';
import XIcon from '~components/icons/XIcon';
import Portal from '~DesignSystem/Portal';
import * as S from './styles';

type Props = {
  children?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
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
          {children}
        </S.Content>
      </S.Container>
    </Portal>
  );
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <S.Body>{children}</S.Body>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <S.Footer>{children}</S.Footer>;
};

Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
