import styled, { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import Rack from '../../../public/image/rack.svg';
import MemoBoard from '../../../public/image/MemoBoard.svg';
import { theme } from '../../styles/theme';

const MyRoom = () => {
  const router = useRouter();
  const handleRoute = () => {
    // 추후 라운지 내부로 가는 코드로 고치기
    router.push('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <ContentContainer>
          {/* 여기에 사용자 이름 패치 필요 */}
          <RoomName>사용자이름의 방</RoomName>
          <RoomConent>
            <Board>
              <BoardRack />
              <BoardBox />
            </Board>
            <AvatarBox>
              <p>사용자이름</p>
              <img src="/image/human.png" alt="아바타" />
            </AvatarBox>
          </RoomConent>
          <RoomBottom>
            <Door onClick={handleRoute} />
          </RoomBottom>
        </ContentContainer>
      </Wrap>
    </ThemeProvider>
  );
};

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  display: flex;
  align-items: center;
  min-height: 100vh;
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
  width: 100%;
  height: 668px;
  display: flex;
`;

const Board = styled.div`
  margin: 25px auto auto 82px;
  position: relative;
`;

const BoardRack = styled(Rack)`
  z-index: 1;
  position: absolute;
  left: 174px;
`;

const BoardBox = styled(MemoBoard)`
  z-index: 1;
  position: absolute;
  top: 134px;
`;

const AvatarBox = styled.div`
  font-size: 50px;
  margin: 148px 320px auto auto;
  width: 320px;
  height: 520px;
  text-align: center;
  p {
    margin-bottom: 47px;
  }
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
