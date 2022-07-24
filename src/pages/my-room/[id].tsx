import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Avatar from '~components/MyRoom/Avatar';
import Board from '~components/MyRoom/Board';
import GuestBook from '~components/MyRoom/GuestBook';
import MemoModal from '~components/MyRoom/MemoModal';
import { Comment } from '~/lib/commentType';
import Axios from '~lib/axios';

const MyRoom = () => {
  const router = useRouter();
  const [isModalPopup, setIsModalPopup] = useState(false);
  const [isSecondModalPopup, setIsSecondModalPopup] = useState(false);
  const [clickedMemoProps, setClickedMemoProps] = useState<Comment | null>(null);
  const [myRoomData, setMyRoomData] = useState<any>({
    roomData: {
      id: 2,
      createAt: '2022-07-22T22:51:44.739Z',
      updateAt: '2022-07-22T22:51:44.739Z',
      user: {
        id: 2,
        phone: '01093202207',
        name: '박재민',
        email: 'pjm2207@naver.com',
        createAt: '2022-07-22T22:45:51.374Z',
        updateAt: '2022-07-22T22:45:51.374Z',
        password1: null,
      },
    },
    memos: [
      {
        id: 1,
        title: '재민아',
        content: '일좀해라',
        createdAt: '2022-07-22T22:53:23.863Z',
        updatedAt: '2022-07-22T22:53:37.218Z',
      },
    ],
  });

  const handleRouteClick = () => {
    // 추후 라운지 내부로 가는 코드로 고치기
    router.push('/');
  };

  const handleModalClick = () => {
    setIsModalPopup(!isModalPopup);
  };

  const fetchData = async (id: string | string[] | undefined) => {
    try {
      const data = await Axios.get(`/api/myroom/${id}`);
      if (data !== null) {
        setMyRoomData(data.data);
      }
    } catch {
      console.log('데이터 패치 실패');
    }
  };

  // 메모장 모달을 띄워줌과 동시에 메모장 props 세팅
  const handleSecondModalClick = (id: number | null) => {
    setIsSecondModalPopup(!isSecondModalPopup);
    if (typeof myRoomData !== undefined) {
      setClickedMemoProps(myRoomData.memos.find((item: Comment) => item.id === id) || null);
    }
  };

  useEffect(() => {
    // 라우터가 준비 됐을 때 데이터 패치
    if (!router.isReady) return;
    const routerId = router.query.id;
    fetchData(routerId);
  }, [router.isReady]);

  return (
    <Wrap>
      {isModalPopup && (
        <GuestBook
          onClose={() => setIsModalPopup(false)}
          handleSecondModalClick={handleSecondModalClick}
          comments={myRoomData.memos}
        />
      )}
      {isSecondModalPopup && (
        <MemoModal onClose={() => setIsSecondModalPopup(false)} comment={clickedMemoProps} />
      )}
      <ContentContainer>
        {/* 여기에 사용자 이름 패치 필요 */}
        <RoomName>사용자이름의 방</RoomName>
        <RoomConent>
          <Board
            comments={myRoomData.memos}
            handleModalClick={handleModalClick}
            handleSecondModalClick={handleSecondModalClick}
          />
          <Avatar />
        </RoomConent>
        <RoomBottom>
          <Door onClick={handleRouteClick} />
        </RoomBottom>
      </ContentContainer>
    </Wrap>
  );
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
