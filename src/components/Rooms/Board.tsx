import styled, { css } from 'styled-components';
import BoardRack from '~components/icons/BoardRack';
import LionDoll from '~components/icons/LionDoll';
import TapeIcon from '~components/icons/Tape';
import { Comment } from '~/lib/commentType';

type TapePositions = 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | 'center';
type PostShape = 'circle' | 'rectangle';

type Props = {
  handleModalClick: () => void;
  handleMemoModalClick: (id: number) => void;
  comments: Array<Comment>;
};

// comments는 최신 5개? 처음 5개? 만약 5개 미만이면?
const Board = ({ handleModalClick, handleMemoModalClick, comments }: Props) => {
  return (
    <BoardContainer>
      <BoardRack />
      <BoardBody>
        <>
          <MoreButton type="button" onClick={handleModalClick}>
            <LionDoll />
          </MoreButton>
          {comments[0] && (
            <Post top="10%" left="8%">
              <PostBody shape="circle" onClick={() => handleMemoModalClick(comments[0].id)}>
                <p>{comments && comments[0].title}</p>
              </PostBody>
              <Tape position="center" />
            </Post>
          )}
          {comments[1] && (
            <Post top="10%" left="65%" rotate="right">
              <PostBody shape="rectangle" onClick={() => handleMemoModalClick(comments[1].id)}>
                <p>{comments && comments[1].title}</p>
              </PostBody>
              <Tape fill="#3efff3" opacity="0.52" position="leftTop" />
              <Tape fill="#3efff3" opacity="0.52" position="rightBottom" />
            </Post>
          )}
          {comments[2] && (
            <Post top="30%" left="35%" rotate="left">
              <PostBody shape="rectangle" onClick={() => handleMemoModalClick(comments[2].id)}>
                <p>{comments && comments[2].title}</p>
              </PostBody>
              <Tape fill="#fff844" opacity="0.63" position="leftTop" />
              <Tape fill="#fff844" opacity="0.63" position="rightTop" />
              <Tape fill="#fff844" opacity="0.63" position="leftBottom" />
              <Tape fill="#fff844" opacity="0.63" position="rightBottom" />
            </Post>
          )}
          {comments[3] && (
            <Post top="50%" left="10%" rotate="right">
              <PostBody shape="rectangle" onClick={() => handleMemoModalClick(comments[3].id)}>
                <p>{comments && comments[3].title}</p>
              </PostBody>
              <Tape fill="#caa5E8" opacity="0.52" position="leftTop" />
              <Tape fill="#caa5E8" opacity="0.52" position="rightBottom" />
            </Post>
          )}
          {comments[4] && (
            <Post top="55%" left="65%">
              <PostBody shape="circle" onClick={() => handleMemoModalClick(comments[4].id)}>
                <p>{comments && comments[4].title}</p>
              </PostBody>
              <Tape fill="#b3ec9f" opacity="0.59" position="center" />
            </Post>
          )}
        </>
      </BoardBody>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 25px auto auto 82px;
`;

const BoardBody = styled.div`
  position: relative;
  top: -30px;
  background-image: url('/image/board.png');
  width: 622px;
  height: 441px;
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
  
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  width: 126px;
  height: 144px;
`;

const Tape = styled(TapeIcon)<{ position: TapePositions }>`
  position: absolute;
  ${props =>
    props.position === 'leftTop' &&
    css`
      top: 5%;
      transform: rotate(0.12turn);
    `}
  ${props =>
    props.position === 'rightTop' &&
    css`
      left: 80%;
      transform: rotate(-0.15turn);
    `}
  ${props =>
    props.position === 'leftBottom' &&
    css`
      top: 88%;
      transform: rotate(-0.18turn);
    `}
  ${props =>
    props.position === 'rightBottom' &&
    css`
      top: 88%;
      left: 88%;
      transform: rotate(0.1turn);
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

  display: flex;
  position: absolute;
  top: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    padding: 0 6px;
    width: 118px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default Board;
