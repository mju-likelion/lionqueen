import { useState } from 'react';
import ConfirmModal from '~/components/ConfirmModal';

const ModalTest = () => {
  const [isShow, setIsShow] = useState(false);
  const [secondShow, setSecondShow] = useState(false);

  return (
    <>
      <button onClick={() => setIsShow(true)}>show</button>
      {isShow && (
        <ConfirmModal
          isSingle
          size="large"
          title="모달 제목"
          onClose={() => {
            setIsShow(false);
          }}
          onConfirm={() => {
            setSecondShow(true);
          }}
        >
          여기는 내용이 들어옵니다. 여기는 내용이 들어옵니다. 여기는 내용이 들어옵니다. 여기는
          내용이 들어옵니다. 여기는 내용이 들어옵니다.
        </ConfirmModal>
      )}
      {secondShow && (
        <ConfirmModal
          isSingle
          size="medium"
          title="모달 제목"
          onClose={() => {
            setSecondShow(false);
          }}
          onConfirm={() => {
            setSecondShow(false);
          }}
        >
          2번째 모달
        </ConfirmModal>
      )}
    </>
  );
};
export default ModalTest;
