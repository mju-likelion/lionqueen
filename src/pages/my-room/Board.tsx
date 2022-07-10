import styled, { css } from 'styled-components';
import BoardRack from '~components/icons/BoardRack';
import LionDoll from '~components/icons/LionDoll';
import TapeIcon from '~components/icons/Tape';
import { Comment } from './CommentType';

type TapePositions = 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | 'center';
type PostShape = 'circle' | 'rectangle';

type Props = {
  handleModalClick: () => void;
  handleSecondModalClick: (id: number) => void;
  comments: Array<Comment>;
};

// comments는 최신 5개? 처음 5개? 만약 5개 미만이면?
const Board = ({ handleModalClick, handleSecondModalClick, comments }: Props) => {
  return (
    <BoardContainer>
      <Rack />
      <BoardBody>
        <MoreButton type="button" onClick={handleModalClick}>
          <LionDoll />
        </MoreButton>
        <Post top="10%" left="8%">
          <PostBody shape="circle" onClick={() => handleSecondModalClick(0)}>
            <p>{comments[0].title}</p>
          </PostBody>
          <Tape position="center" />
        </Post>
        <Post top="10%" left="65%" rotate="right">
          <PostBody shape="rectangle" onClick={() => handleSecondModalClick(1)}>
            <p>{comments[1].title}</p>
          </PostBody>
          <Tape fill="#3efff3" opacity="0.52" position="leftTop" />
          <Tape fill="#3efff3" opacity="0.52" position="rightBottom" />
        </Post>
        <Post top="30%" left="35%" rotate="left">
          <PostBody shape="rectangle" onClick={() => handleSecondModalClick(2)}>
            <p>{comments[2].title}</p>
          </PostBody>
          <Tape fill="#fff844" opacity="0.63" position="leftTop" />
          <Tape fill="#fff844" opacity="0.63" position="rightTop" />
          <Tape fill="#fff844" opacity="0.63" position="leftBottom" />
          <Tape fill="#fff844" opacity="0.63" position="rightBottom" />
        </Post>
        <Post top="50%" left="10%" rotate="right">
          <PostBody shape="rectangle" onClick={() => handleSecondModalClick(3)}>
            <p>{comments[3].title}</p>
          </PostBody>
          <Tape fill="#caa5E8" opacity="0.52" position="leftTop" />
          <Tape fill="#caa5E8" opacity="0.52" position="rightBottom" />
        </Post>
        <Post top="55%" left="65%">
          <PostBody shape="circle" onClick={() => handleSecondModalClick(4)}>
            <p>{comments[4].title}</p>
          </PostBody>
          <Tape fill="#b3ec9f" opacity="0.59" position="center" />
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
  position: absolute;
  left: 174px;
`;

const BoardBody = styled.div`
  position: absolute;
  top: 134px;
  width: 622px;
  height: 441px;
  background-image: url('/image/board.png');
`;

const MoreButton = styled.button`
  position: absolute;
  top: 300px;
  right: -100px;
  cursor: pointer;
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
`;

const PostBody = styled.button<{ shape: PostShape }>`
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
  cursor: pointer;

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
