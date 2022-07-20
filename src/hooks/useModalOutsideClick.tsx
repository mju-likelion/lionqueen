import { MouseEvent, useRef } from 'react';

type Props = {
  onClose: () => void;
};

// 모달 바깥 클릭 시 닫힘
const useModalOutsideClick = (onClose: Props['onClose']) => {
  const outsideRef = useRef(null);
  const onClick = (e: MouseEvent) => {
    if (outsideRef.current === e.target) {
      onClose();
    }
  };
  return {
    ref: outsideRef,
    onClick,
  };
};

export default useModalOutsideClick;
