import { useQuery } from '@tanstack/react-query';
import { fetchAllMemos } from '~/api/memo';

const useGetAllMemos = (routerId: string, Error: () => void) => {
  return useQuery(['allMemo'], () => fetchAllMemos(routerId, Error), {
    enabled: !!routerId,
    retry: 0,
  });
};

export default useGetAllMemos;
