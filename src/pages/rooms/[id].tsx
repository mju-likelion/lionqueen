import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import Avatar from '~components/Rooms/Avatar';
import Board from '~components/Rooms/Board';
import GuestBook from '~components/Rooms/GuestBook';
import MemoModal from '~components/Rooms/MemoModal';
import { Comment } from '~/lib/commentType';

const MyRoom = () => {
  const router = useRouter();
  const [isModalPopup, setIsModalPopup] = useState(false);
  const [isSecondModalPopup, setIsSecondModalPopup] = useState(false);
  const [clickedMemoProps, setClickedMemoProps] = useState<Comment | null>(null);

  const { status, data, error, isFetching } = useQuery([`/api/rooms/${router.query.id}`]);

  // api 완성 전 임시 동작, api 완성 후 status(에러,로딩,완료)에 따른 동작 변경 필요
  let roomData: any = data;

  if (roomData === undefined) {
    console.log('데이터가 없습니다. 임시 데이터를 적용합니다.');
    roomData = {
      roomData: {
        id: 2,
        createAt: '2022-07-22T22:51:44.739Z',
        updateAt: '2022-07-22T22:51:44.739Z',
        user: {
          id: 2,
          phone: '01093202207',
          name: '에러유저',
          email: 'error2022@naver.com',
          createAt: '2022-07-22T22:45:51.374Z',
          updateAt: '2022-07-22T22:45:51.374Z',
          password1: null,
        },
      },
      memos: [
        {
          id: 1,
          title: 'RQ에러',
          content: '해결해줘',
          createdAt: '2022-07-22T22:53:23.863Z',
          updatedAt: '2022-07-22T22:53:37.218Z',
        },
      ],
    };
  }

  const handleRouteClick = () => {
    // 추후 라운지 내부로 가는 코드로 고치기
    router.push('/');
  };

  const handleModalClick = () => {
    setIsModalPopup(!isModalPopup);
  };

  // 메모장 모달을 띄워줌과 동시에 메모장 props 세팅
  const handleSecondModalClick = (id: number | null) => {
    setIsSecondModalPopup(!isSecondModalPopup);
    if (typeof roomData !== undefined) {
      setClickedMemoProps(roomData.memos.find((item: Comment) => item.id === id) || null);
    }
  };

  return (
    <Wrap>
      {isModalPopup && (
        <GuestBook
          onClose={() => setIsModalPopup(false)}
          handleSecondModalClick={handleSecondModalClick}
          comments={roomData.memos}
        />
      )}
      {isSecondModalPopup && (
        <MemoModal onClose={() => setIsSecondModalPopup(false)} comment={clickedMemoProps} />
      )}
      <ContentContainer>
        {/* 여기에 사용자 이름 패치 필요 */}
        <RoomName>{roomData.roomData.user.name}</RoomName>
        <RoomConent>
          <Board
            comments={roomData.memos}
            handleModalClick={handleModalClick}
            handleSecondModalClick={handleSecondModalClick}
          />
          <Avatar roomOwner={roomData.roomData.user.name} />
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
