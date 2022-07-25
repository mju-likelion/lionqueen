import styled from 'styled-components';
import { useState } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import Modal from '~components/ModalPopup';
import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';
import Notice from '~components/Notice/Notice';

const InviteModal = ({ onClose }: { onClose: () => void }) => {
  const [inviteLink, setInviteLink] = useState('https://liontown.city/lounge/123?inviteCode=123');
  // 초대 링크 생성되면 저장하는 함수 필요
  const dispatch = useAppDispatch();

  const handleNotice = () => {
    dispatch(showNotice('복사완료'));
  };

  return (
    <Modal isCancel size="large" title="초대링크" onClose={onClose}>
      <InviteWrapper>
        <InviteLink>{inviteLink}</InviteLink>
        {/* alert 토스트메시지로 변경 필요 */}
        <CopyToClipboard text={inviteLink}>
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
  text-align: left;
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 16px;
`;

const CopyBtn = styled.button`
  position: absolute;
  margin-left: 70px;
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
