import { useQuery } from '@tanstack/react-query';
import Axios from '~lib/axios';

const myInfoList = async () => {
  try {
    const loungeData = await Axios.get('/api/lounges/mypage', {
      withCredentials: true,
    });
    return loungeData.data.data;
  } catch (err) {
    throw new Error('리스트를 불러올 수 없습니다.');
  }
};

const useGetLoungeList = () => {
  return useQuery(['loungeList'], myInfoList);
};

export default useGetLoungeList;
