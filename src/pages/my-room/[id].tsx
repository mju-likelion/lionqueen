import styled from 'styled-components';
import { useRouter } from 'next/router';
import Board from './Board';
import Avatar from './Avatar';

const MyRoom = () => {
  const router = useRouter();
  const handleRouteClick = () => {
    // 추후 라운지 내부로 가는 코드로 고치기
    router.push('/');
  };

  return (
    <Wrap>
      <ContentContainer>
        {/* 여기에 사용자 이름 패치 필요 */}
        <RoomName>사용자이름의 방</RoomName>
        <RoomConent>
          <Board />
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
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  width: 1440px;
  height: 1024px;
`;

const RoomName = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

const RoomConent = styled.div`
  background-image: url('/image/myRoomWallpaper.jpg');
  width: inherit;
  height: 668px;
  display: flex;
`;

const RoomBottom = styled.div`
  background-color: #ffc52f;
  width: 100%;
  height: 264px;
  display: flex;
`;

const Door = styled.div`
  background: url('/image/doorClose.png') no-repeat;
  margin: 130px auto auto 37px;
  width: 85px;
  height: 120px;
  :hover {
    background: url('/image/doorOpen.png') no-repeat;
    width: 170px;
    height: 140px;
  }
`;

export default MyRoom;
