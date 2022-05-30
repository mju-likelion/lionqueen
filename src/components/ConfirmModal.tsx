/* eslint-disable @typescript-eslint/no-empty-function */

import styled from 'styled-components';
import Button from '~DesignSystem/Button';
import Modal from '~DesignSystem/Modal';

type Props = {
  children: React.ReactNode;
  title: string;
  isSingle?: boolean;
  onConfirm: () => void;
  onClose?: () => void;
};

const ConfirmModal = ({
  children,
  title = '제목',
  isSingle = false,
  onConfirm,
  onClose = () => {},
}: Props) => {
  return (
    <Modal title={title} onClose={onClose}>
      {children}
      <Actions>
        <Button onClick={onConfirm}>확인</Button>
        {!isSingle && <Button onClick={onClose}>취소</Button>}
      </Actions>
    </Modal>
  );
};

const Actions = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;

  margin-top: 14px;

  button {
    width: 112px !important;
    height: 38px !important;

    font-weight: 300;
    font-size: 18px !important;
  }
`;

export default ConfirmModal;
