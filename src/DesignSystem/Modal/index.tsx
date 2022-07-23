import React, { useEffect, useLayoutEffect } from 'react';
import XIcon from '~components/icons/XIcon';
import Portal from '~DesignSystem/Portal';
import * as Style from './styles';
import useModalOutsideClick from '~hooks/useModalOutsideClick';

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
      <Style.Container {...useModalOutsideClick(onClose)}>
        <Style.Content size={size}>
          <Style.XIconWrapper onClick={onClose}>
            <XIcon />
          </Style.XIconWrapper>
          <Style.Title>{title}</Style.Title>
          {children}
        </Style.Content>
      </Style.Container>
    </Portal>
  );
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <Style.Body>{children}</Style.Body>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <Style.Footer>{children}</Style.Footer>;
};

Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
