import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import BackgroundMain from '../BackgroundMain';

const changeMessage = [
  '사자가 달리고 있어요!',
  '띵동~ 사자 배달 왔습니다!',
  '영차- 영차 조금만 기다려주세요!',
  '라이언타운으로 하고 싶은 말을 전해보세요!',
  '어흥 어흥! 가는 중이라구요!',
];

const getRandomMessage = (length: number) => {
  return changeMessage[Math.floor(Math.random() * length)];
};

const loadingPage = () => {
  const [randomWord, setRandomWord] = useState('');
  useEffect(() => {
    setRandomWord(getRandomMessage(changeMessage.length));
  }, []);

  return (
    <BackgroundMain>
      <LoadingWrapper>
        <LoadingTitle>Loading...</LoadingTitle>
        <HrStyle />
        <LoadingBox>
          <LoadingSquare />
          <LoadingSquare />
          <LoadingSquare />
          <LoadingSquare />
          <LoadingSquare />
          <LoadingSquare />
          <LoadingSquare />
          <LoadingSquare />
          <LoadingSquare />
          <LoadingSquare />
        </LoadingBox>
        <MessageBox>{randomWord}</MessageBox>
      </LoadingWrapper>
    </BackgroundMain>
  );
};
const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const LoadingTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  line-height: 56px;
  margin-top: 44px;
  margin-left: 15px;
`;

const HrStyle = styled.hr`
  width: 600px;
  border-top: 2px solid black;
  margin-top: 32px;
`;

const LoadingBox = styled.div`
  display: flex;
  margin-top: 111px;
`;

const LoadingSquare = styled.div`
  width: 28px;
  height: 47px;
  border-radius: 13px;
  margin-right: 26px;

  animation-name: loading;
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;

  @keyframes loading {
    from {
      width: 30px;
      margin-left: 10%;
      background: ${({ theme }) => theme.colors.primary.skyblue};
    }
    to {
      background: ${({ theme }) => theme.colors.primary.yellow};
    }
  }
`;

const MessageBox = styled.div`
  margin-top: 94px;
  font-weight: 300;
  font-size: 23px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.primary.black};
`;

export default loadingPage;
