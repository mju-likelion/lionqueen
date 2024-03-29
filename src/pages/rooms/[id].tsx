import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Comment } from '~lib/commentType';
import useGetAllMemos from '~/hooks/rooms/useGetAllMemos';
import useGetRoom from '~/hooks/rooms/useGetRoom';

import Avatar from '~components/Rooms/Avatar';
import Board from '~components/Rooms/Board';
import GuestBook from '~components/Rooms/GuestBook';
import MemoModal from '~components/Rooms/MemoModal';
import Notice from '~components/Notice';
import Loading from '~DesignSystem/Loading';

const MyRoom = () => {
  const router = useRouter();
  const [isGuestBookPopup, setIsGuestBookPopup] = useState(false);
  const [isMemoModalPopup, setIsMemoModalPopup] = useState(false);
  const [clickedMemoProps, setClickedMemoProps] = useState<Comment | null>(null);
  const [routerId, setRouterId] = useState<any>('');

  // 리액트 쿼리 이용 상태 관리
  const { data: allMemo } = useGetAllMemos(routerId);
  const { data: room, error, isLoading } = useGetRoom(routerId, router);

  const handleExitClick = () => {
    router.push('/lounge');
  };

  const handleModalClick = () => {
    setIsGuestBookPopup(!isGuestBookPopup);
  };

  // 메모장 모달을 띄워줌과 동시에 메모장 props 세팅
  const handleMemoModalClick = (id: number | null) => {
    setIsMemoModalPopup(!isMemoModalPopup);
    if (typeof allMemo !== null) {
      setClickedMemoProps(allMemo.data.find((item: Comment) => item.id === id) || null);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    setRouterId(router.query.id);
  }, [router.isReady]);

  if (error) {
    return <p>알 수 없는 에러가 발생했습니다.</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrap>
      {/* 모달 */}
      {isGuestBookPopup && (
        <GuestBook
          onClose={() => setIsGuestBookPopup(false)}
          handleMemoModalClick={handleMemoModalClick}
          comments={allMemo.data}
        />
      )}
      {isMemoModalPopup && (
        <MemoModal
          routerId={routerId}
          onClose={() => setIsMemoModalPopup(false)}
          comment={clickedMemoProps}
        />
      )}

      {/* 컨텐츠 */}
      <ContentContainer>
        <RoomName>{room.data.userName.name}</RoomName>
        <RoomConent>
          <Board
            comments={room.data.memoData}
            handleModalClick={handleModalClick}
            handleMemoModalClick={handleMemoModalClick}
          />
          <Avatar roomOwner={room.data.userName.name} />
        </RoomConent>
        <RoomBottom>
          <Door onClick={handleExitClick} />
        </RoomBottom>
      </ContentContainer>
      <Notice />
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
