import styled from 'styled-components';
import { useState } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import Modal from '~components/ModalPopup';
import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';
import Notice from '~components/Notice/Notice';

type Props = {
  onClose: () => void;
  inviteLink: string;
};

const InviteModal = ({ onClose, inviteLink }: Props) => {
  const [link, setLink] = useState(inviteLink);

  const dispatch = useAppDispatch();

  const handleNotice = () => {
    dispatch(showNotice('초대링크가 복사되었습니다.'));
  };

  return (
    <Modal isCancel size="large" title="초대링크" onClose={onClose}>
      <InviteWrapper>
        <InviteLink>{link}</InviteLink>
        <CopyToClipboard text={link}>
          <CopyBtn onClick={handleNotice}>복사하기</CopyBtn>
        </CopyToClipboard>
      </InviteWrapper>
      <Comment>
        위 링크를 복사하고 친구에게 전해보세요! 링크를 통해 라운지 초대가 완료됩니다.
      </Comment>
      <Notice />
    </Modal>
  );
};

const InviteWrapper = styled.div`
  margin: 0 auto;
  border-radius: 15px;
  background-color: #f1f1f1;
  padding: 5px 20px 0;
  width: 300px;
  height: 120px;
`;

const InviteLink = styled.p`
  height: 45px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 16px;
`;

const CopyBtn = styled.button`
  position: fixed;
  margin-left: 60px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.brown};
  font-size: 16px;
`;

const Comment = styled.p`
  margin: 50px auto 0;
  width: 260px;
  height: 30px;
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 16px;
`;

export default InviteModal;
