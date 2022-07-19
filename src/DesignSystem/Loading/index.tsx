import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '~/styles/theme';
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

const loading = keyframes`
  from {
    margin-left: 10%;
    background-color: ${theme.colors.primary.skyblue};
    width: 30px;
  }
  to {
    background-color: ${theme.colors.primary.yellow};
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const LoadingTitle = styled.p`
  margin-top: 44px;
  margin-left: 15px;
  line-height: 56px;
  font-size: 50px;
  font-weight: 700;
`;

const HrStyle = styled.hr`
  margin-top: 32px;
  border-top: 2px solid black;
  width: 600px;
`;

const LoadingBox = styled.div`
  display: flex;
  margin-top: 111px;
`;

const LoadingSquare = styled.div`
  margin-right: 26px;
  border-radius: 13px;
  width: 28px;
  height: 47px;

  animation-name: ${loading};
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
`;

const MessageBox = styled.div`
  margin-top: 94px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 23px;
  font-weight: 300;
`;

export default loadingPage;
