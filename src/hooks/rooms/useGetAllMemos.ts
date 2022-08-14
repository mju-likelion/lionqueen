import { useQuery } from '@tanstack/react-query';
import { fetchAllMemos } from '~/api/memo';
import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';

const useGetAllMemos = (routerId: string) => {
  const dispatch = useAppDispatch();
  const showError = () => {
    dispatch(showNotice('메모 정보를 가져오는데 실패했습니다.'));
  };

  return useQuery(['allMemo'], () => fetchAllMemos(routerId, showError), {
    enabled: !!routerId,
    retry: 0,
  });
};

export default useGetAllMemos;
