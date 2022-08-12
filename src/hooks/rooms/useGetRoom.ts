import { useQuery } from '@tanstack/react-query';
import { NextRouter } from 'next/router';
import { fetchRoomById } from '~/api/memo';

const useGetRoom = (routerId: string, Error: () => void, router: NextRouter) => {
  return useQuery([routerId], () => fetchRoomById(routerId, Error, router), {
    // routerId가 들어오고 나서 리액트 쿼리 실행
    enabled: !!routerId,
    retry: 2,
  });
};

export default useGetRoom;
