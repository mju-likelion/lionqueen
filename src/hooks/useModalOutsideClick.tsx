import { RefObject, MouseEvent } from 'react';

type Props = {
  ref: RefObject<HTMLDivElement>;
  e: MouseEvent;
  onClose: () => void;
};

// 모달 바깥 클릭 시 닫힘
const useCloseModal = (ref: Props['ref'], e: Props['e'], onClose: Props['onClose']) => {
  if (e.target === ref.current) {
    onClose();
  }
};

export default useCloseModal;
