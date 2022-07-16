import { useSetRecoilState } from 'recoil';
import { isShowNotice, noticeMessage } from 'src/atoms/notice';

function useShowNotice() {
  const setIsShow = useSetRecoilState(isShowNotice);
  const setMessage = useSetRecoilState(noticeMessage);

  function showNotice({ message }: { message: string }) {
    setIsShow(true);
    setMessage(message);

    setTimeout(() => {
      setIsShow(false);
    }, 3500);
  }

  return {
    showNotice: ({ message }: { message: string }) => showNotice({ message }),
  };
}

export default useShowNotice;
