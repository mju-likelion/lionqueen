import { RefObject, MouseEvent } from 'react';

type Props = {
  ref: RefObject<HTMLDivElement>;
  e: MouseEvent;
};

// 모달 바깥 클릭 시 닫힘
const useCloseModal = (ref: Props['ref'], e: Props['e']) => {
  if (e.target === ref.current) {
    return true;
  }
  return false;
};

export default useCloseModal;
