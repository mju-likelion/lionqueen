import styled, { css } from 'styled-components';
import BoardRack from '~components/icons/BoardRack';
import TapeIcon from '~components/icons/Tape';

type TapePositions = 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | 'center';
type PostShape = 'circle' | 'rectangle';

const Board = () => {
  return (
    <BoardContainer>
      <Rack />
      <BoardBody>
        <Post top="10%" left="8%">
          <Tape position="center" />
          <PostBody shape="circle">
            <p>대충내용1</p>
          </PostBody>
        </Post>
        <Post top="10%" left="65%" rotate="right">
          <Tape fill="#3efff3" opacity="0.52" position="leftTop" />
          <PostBody shape="rectangle">
            <p>대충내용2</p>
          </PostBody>
          <Tape fill="#3efff3" opacity="0.52" position="rightBottom" />
        </Post>
        <Post top="30%" left="35%" rotate="left">
          <Tape fill="#fff844" opacity="0.63" position="leftTop" />
          <Tape fill="#fff844" opacity="0.63" position="rightTop" />
          <PostBody shape="rectangle">
            <p>대충내용3</p>
          </PostBody>
          <Tape fill="#fff844" opacity="0.63" position="leftBottom" />
          <Tape fill="#fff844" opacity="0.63" position="rightBottom" />
        </Post>
        <Post top="50%" left="10%" rotate="right">
          <Tape fill="#caa5E8" opacity="0.52" position="leftTop" />
          <PostBody shape="rectangle">
            <p>사각형 엄청나게 긴 제목입니다</p>
          </PostBody>
          <Tape fill="#caa5E8" opacity="0.52" position="rightBottom" />
        </Post>
        <Post top="55%" left="65%">
          <Tape fill="#b3ec9f" opacity="0.59" position="center" />
          <PostBody shape="circle">
            <p>동그라미 엄청나게 긴 제목입니다</p>
          </PostBody>
        </Post>
      </BoardBody>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
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
  background-image: url('/image/board.png');
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

const Tape = styled(TapeIcon)<{ position: TapePositions }>`
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

const PostBody = styled.div<{ shape: PostShape }>`
  ${props =>
    props.shape === 'circle' &&
    css`
      background-image: url('/image/postCircle.png');
      width: 126px;
      height: 122px;
    `}
  ${props =>
    props.shape === 'rectangle' &&
    css`
      background-image: url('/image/postRectangle.png');
      width: 133px;
      height: 140px;
    `}
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 118px;
    padding: 0 6px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default Board;
