import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import BoardRack from '~/components/icons/BoardRack';
import TapeIcon from '~/components/icons/Tape';

const MyRoom = () => {
  const router = useRouter();
  const handleRoute = () => {
    // 추후 라운지 내부로 가는 코드로 고치기
    router.push('/');
  };

  return (
    <Wrap>
      <ContentContainer>
        {/* 여기에 사용자 이름 패치 필요 */}
        <RoomName>사용자이름의 방</RoomName>
        <RoomConent>
          {/* 보드, 포스트 각각 컴포넌트화 시키기 */}
          <Board>
            <Rack />
            <BoardBody>
              <Post top="10%" left="8%">
                <Tape position="center" />
                <PostBody shape="circle">대충내용1</PostBody>
              </Post>
              <Post top="10%" left="65%" rotate="right">
                <Tape fill="#3efff3" opacity="0.52" position="leftTop" />
                <PostBody shape="rectangle">대충내용2</PostBody>
                <Tape fill="#3efff3" opacity="0.52" position="rightBottom" />
              </Post>
              <Post top="30%" left="35%" rotate="left">
                <Tape fill="#fff844" opacity="0.63" position="leftTop" />
                <Tape fill="#fff844" opacity="0.63" position="rightTop" />
                <PostBody shape="rectangle">대충내용3</PostBody>
                <Tape fill="#fff844" opacity="0.63" position="leftBottom" />
                <Tape fill="#fff844" opacity="0.63" position="rightBottom" />
              </Post>
              <Post top="50%" left="10%" rotate="right">
                <Tape fill="#caa5E8" opacity="0.52" position="leftTop" />
                <PostBody shape="rectangle">내용최대7글자</PostBody>
                <Tape fill="#caa5E8" opacity="0.52" position="rightBottom" />
              </Post>
              <Post top="55%" left="65%">
                <Tape fill="#b3ec9f" opacity="0.59" position="center" />
                <PostBody shape="circle">내 용 최 대</PostBody>
              </Post>
            </BoardBody>
          </Board>
          <AvatarBox>
            {/* 사용자 이름 패치 필요 */}
            <p>사용자이름</p>
            <img src="/image/human.png" alt="아바타" />
          </AvatarBox>
        </RoomConent>
        <RoomBottom>
          <Door onClick={handleRoute} />
        </RoomBottom>
      </ContentContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  min-width: 1440px;
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

const Rack = styled(BoardRack)`
  z-index: 1;
  position: absolute;
  left: 174px;
`;

const BoardBody = styled.div`
  z-index: 1;
  position: absolute;
  top: 134px;
  width: 622px;
  height: 441px;
  background-image: url('../image/board.png');
`;

const Post = styled.div<{ top?: string; left?: string; rotate?: string }>`
  ${props =>
    props.rotate === 'right' &&
    css`
      transform: rotate(0.03turn);
    `}
  ${props =>
    props.rotate === 'left' &&
    css`
      transform: rotate(-0.04turn);
    `}
  width: 126px;
  height: 144px;
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
`;

const Tape = styled(TapeIcon)<{ position: string }>`
  position: absolute;
  ${props =>
    props.position === 'leftTop' &&
    css`
      transform: rotate(0.12turn);
      top: 5%;
    `}
  ${props =>
    props.position === 'rightTop' &&
    css`
      transform: rotate(-0.15turn);
      left: 80%;
    `}
  ${props =>
    props.position === 'leftBottom' &&
    css`
      transform: rotate(-0.18turn);
      top: 88%;
    `}
  ${props =>
    props.position === 'rightBottom' &&
    css`
      transform: rotate(0.1turn);
      top: 88%;
      left: 88%;
    `}
  ${props =>
    props.position === 'center' &&
    css`
      left: 50%;
    `}
  z-index: 1;
`;

const PostBody = styled.div<{ shape: string }>`
  ${props =>
    props.shape === 'circle' &&
    css`
      background-image: url('../image/postCircle.png');
      width: 126px;
      height: 122px;
    `}
  ${props =>
    props.shape === 'rectangle' &&
    css`
      background-image: url('../image/postRectangle.png');
      width: 133px;
      height: 140px;
    `}
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarBox = styled.div`
  font-size: 50px;
  margin: 148px 320px auto auto;
  width: 320px;
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
