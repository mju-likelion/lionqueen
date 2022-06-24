import { Router } from 'next/router';
import React from 'react';
import ConfirmModal from '~/components/ConfirmModal';

function LoungeLeavingModal() {
  return (
    <ConfirmModal
      isSingle={false}
      size="large"
      title="소속 라운지 탈퇴"
      onClose={() => {
        console.log('취소');
      }}
      onConfirm={() => {
        console.log('확인');
      }}
    >
      정말 그룹이름을 탈퇴하시겠습니까?
      {/* 정말 {그룹이름}을 탈퇴하시겠습니까? */}
    </ConfirmModal>
  );
}

export default LoungeLeavingModal;
