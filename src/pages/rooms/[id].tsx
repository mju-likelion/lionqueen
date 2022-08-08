import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import Avatar from '~components/Rooms/Avatar';
import Board from '~components/Rooms/Board';
import GuestBook from '~components/Rooms/GuestBook';
import MemoModal from '~components/Rooms/MemoModal';
import { Comment } from '~lib/commentType';
import Axios from '~lib/axios';

const MyRoom = () => {
  const router = useRouter();
  const [isModalPopup, setIsModalPopup] = useState(false);
  const [isSecondModalPopup, setIsSecondModalPopup] = useState(false);
  const [clickedMemoProps, setClickedMemoProps] = useState<Comment | null>(null);
  const [routerId, setRouterId] = useState<any>('');

  const fetchRoomById = async (id: string) => {
    const res = await Axios.get(`/api/rooms/${id}`, { withCredentials: true });
    return res.data;
  };

  const { status, data } = useQuery([`/api/rooms/${routerId}`], () => fetchRoomById(routerId), {
    // routerId가 들어오고 나서 리액트 쿼리 실행
    enabled: !!routerId,
  });

  useEffect(() => {
    if (!router.isReady) return;
    setRouterId(router.query.id);
  }, [router.isReady]);

  const handleRouteClick = () => {
    router.push('/lounge');
  };

  const handleModalClick = () => {
    setIsModalPopup(!isModalPopup);
  };

  // 메모장 모달을 띄워줌과 동시에 메모장 props 세팅
  const handleSecondModalClick = (id: number | null) => {
    setIsSecondModalPopup(!isSecondModalPopup);
    if (typeof data !== undefined) {
      setClickedMemoProps(data.memos.find((item: Comment) => item.id === id) || null);
    }
  };

  if (status === 'loading') {
    return <p>{status}</p>;
  }

  /* api가 빈 객체여도 정상적으로 리턴됨, 해결 후 서스펜스, 폴백 적용 팔요 */
  if (status === 'success' && data && data.roomData) {
    return (
      <Wrap>
        {isModalPopup && (
          <GuestBook
            onClose={() => setIsModalPopup(false)}
            handleSecondModalClick={handleSecondModalClick}
            comments={data.memos}
          />
        )}
        {isSecondModalPopup && (
          <MemoModal onClose={() => setIsSecondModalPopup(false)} comment={clickedMemoProps} />
        )}
        <ContentContainer>
          <RoomName>{data.roomData.user.name}</RoomName>
          <RoomConent>
            <Board
              comments={data.memos}
              handleModalClick={handleModalClick}
              handleSecondModalClick={handleSecondModalClick}
            />
            <Avatar roomOwner={data.roomData.user.name} />
          </RoomConent>
          <RoomBottom>
            <Door onClick={handleRouteClick} />
          </RoomBottom>
        </ContentContainer>
      </Wrap>
    );
  }
};

const Wrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  width: 1440px;
  height: 1024px;
`;

const RoomName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 94px;
  font-size: 50px;
`;

const RoomConent = styled.div`
  display: flex;
  background-image: url('/image/myRoomWallpaper.jpg');
  width: inherit;
  height: 668px;
`;

const RoomBottom = styled.div`
  display: flex;
  background-color: #ffc52f;
  width: 100%;
  height: 264px;
`;

const Door = styled.div`
  margin: 130px auto auto 37px;
  background: url('/image/doorClose.png') no-repeat;
  width: 85px;
  height: 120px;

  :hover {
    background: url('/image/doorOpen.png') no-repeat;
    width: 170px;
    height: 140px;
  }
`;

export default MyRoom;
