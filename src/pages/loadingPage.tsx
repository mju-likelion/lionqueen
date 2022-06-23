import React from 'react';
import styled from 'styled-components';
import BackgroundMain from '../DesignSystem/BackgroundMain';

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  line-height: 56px;
  margin-top: 44px;
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
  width: 26px;
  height: 47px;
  background: #ffd213;
  border-radius: 5px;
  margin-right: 26px;
`;

const MessageBox = styled.div`
  margin-top: 94px;
  font-weight: 300;
  font-size: 20px;
  line-height: 22px;
  color: #2e2e2e;
`;
const loadingPage = () => {
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
        <MessageBox>
          <p>사자가 달리고 있어요!</p>
        </MessageBox>
      </LoadingWrapper>
    </BackgroundMain>
  );
};
export default loadingPage;
