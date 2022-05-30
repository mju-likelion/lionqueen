import ConfirmModal from '~/components/ConfirmModal';

const ModalTest = () => {
  return (
    <ConfirmModal
      isSingle
      title="대충 확인"
      onClose={() => {
        console.log('취소');
      }}
      onConfirm={() => {
        console.log('확인');
      }}
    >
      진짜입니까?
    </ConfirmModal>
  );
};

export default ModalTest;
