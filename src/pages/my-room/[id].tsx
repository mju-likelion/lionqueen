import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Avatar from './Avatar';
import Board from './Board';
import GuestBook from './GuestBook';
import MemoModal from './MemoModal';
import { Comment } from './commentType';

type Props = {
  comments: Array<Comment>;
};

const MyRoom = ({ comments }: Props) => {
  const router = useRouter();
  const [isModalPopup, setIsModalPopup] = useState(false);
  const [isSecondModalPopup, setIsSecondModalPopup] = useState(false);
  const [clickedMemoProps, setClickedMemoProps] = useState<Comment | null>(null);

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
    setClickedMemoProps(comments.find(comment => comment.id === id) || null);
  };

  return (
    <Wrap>
      {isModalPopup && (
        <GuestBook
          onClose={() => setIsModalPopup(false)}
          handleSecondModalClick={handleSecondModalClick}
          comments={comments}
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
            comments={comments}
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

// 더미데이터
export const getServerSideProps: GetServerSideProps = async () => {
  // api 구현 후 변경 필요
  const comments = [
    {
      id: 0,
      title: '제목0',
      content: '대충 재밌는 내용0',
      nickname: '닉네임0',
    },
    {
      id: 1,
      title: '제목1',
      content: '대충 재밌는 내용1',
      nickname: '닉네임1',
    },
    {
      id: 2,
      title: '제목2',
      content: '대충 재밌는 내용2',
      nickname: '닉네임2',
    },
    {
      id: 3,
      title: '제목3',
      content: '대충 재밌는 내용3',
      nickname: '닉네임3',
    },
    {
      id: 4,
      title: '제목4',
      content: '대충 재밌는 내용4',
      nickname: '닉네임4',
    },
    {
      id: 5,
      title: '제목5',
      content: '대충 재밌는 내용5',
      nickname: '닉네임5',
    },
    {
      id: 6,
      title: '제목6',
      content: '대충 재밌는 내용6',
      nickname: '닉네임6',
    },
    {
      id: 7,
      title: '제목7',
      content: '대충 재밌는 내용7',
      nickname: '닉네임7',
    },
    {
      id: 8,
      title: '제목8',
      content: '대충 재밌는 내용8',
      nickname: '닉네임8',
    },
    {
      id: 9,
      title: '제목9',
      content: '대충 재밌는 내용9',
      nickname: '닉네임9',
    },
    {
      id: 10,
      title: '제목10',
      content: '대충 재밌는 내용10',
      nickname: '닉네임10',
    },
    {
      id: 11,
      title: '제목11',
      content: '대충 재밌는 내용11',
      nickname: '닉네임11',
    },
    {
      id: 12,
      title: '제목12',
      content: '대충 재밌는 내용12',
      nickname: '닉네임12',
    },
    {
      id: 13,
      title: '제목13',
      content: '대충 재밌는 내용13',
      nickname: '닉네임13',
    },
  ];

  return { props: { comments } };
};

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  position: relative;
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
