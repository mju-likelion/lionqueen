import { useQuery } from '@tanstack/react-query';
import { showNotice } from '~store/modules/notice';
import Axios from '~lib/axios';

const myInfoList = async () => {
  try {
    const loungeData = await Axios.get('/api/lounges/mypage', {
      withCredentials: true,
    });
    return loungeData.data.data;
  } catch (err) {
    console.log('가져오기 실패! 바보!');
  }
};

const useGetLoungeList = () => {
  return useQuery(['loungeList'], myInfoList);
};

export default useGetLoungeList;
