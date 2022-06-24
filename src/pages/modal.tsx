import ConfirmModal from '~/components/ConfirmModal';

const ModalTest = () => {
  return (
    <ConfirmModal
      isSingle
      size="large"
      title="모달 제목"
      onClose={() => {
        console.log('취소');
      }}
      onConfirm={() => {
        console.log('확인');
      }}
    >
      여기는 내용이 들어옵니다. 여기는 내용이 들어옵니다. 여기는 내용이 들어옵니다. 여기는 내용이
      들어옵니다. 여기는 내용이 들어옵니다.
    </ConfirmModal>
  );
};
export default ModalTest;
