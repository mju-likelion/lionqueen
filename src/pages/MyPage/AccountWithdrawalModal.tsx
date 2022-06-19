import React from 'react';
import ConfirmModal from '~/components/ConfirmModal';

function AccountWithdrawalModal() {
  return (
    <ConfirmModal
      isSingle={false}
      size="medium"
      title="계정 삭제"
      onClose={() => {
        console.log('취소');
      }}
      onConfirm={() => {
        console.log('확인');
      }}
    >
      정말로 라이언타운에서 계정을 삭제하시겠습니까?
    </ConfirmModal>
  );
}

export default AccountWithdrawalModal;
