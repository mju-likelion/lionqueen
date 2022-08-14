import { useQuery } from '@tanstack/react-query';
import { NextRouter } from 'next/router';
import { fetchRoomById } from '~/api/memo';
import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';

const useGetRoom = (routerId: string, router: NextRouter) => {
  const dispatch = useAppDispatch();
  const showLoginError = () => {
    dispatch(showNotice('이메일이 필요한 서비스입니다.'));
  };
  return useQuery([routerId], () => fetchRoomById(routerId, showLoginError, router), {
    // routerId가 들어오고 나서 리액트 쿼리 실행
    enabled: !!routerId,
    retry: 2,
  });
};

export default useGetRoom;
