import ConfirmModal from '~/components/ConfirmModal';

const ModalTest = () => {
  return (
    <ConfirmModal
      isSingle
      size="medium"
      title="대충 확인"
      onClose={() => {
        console.log('취소');
      }}
      onConfirm={() => {
        console.log('확인');
      }}
    >
      asd
    </ConfirmModal>
  );
};

export default ModalTest;
