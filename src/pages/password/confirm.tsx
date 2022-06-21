import React from 'react';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '../../DesignSystem/Button';

const OverLap = styled.div`
  display: flex;
  margin: 0 auto;
  font-family: 'Maplestory OTF';
`;

const MainText = styled(OverLap)`
  width: 256px;
  padding-top: 122px;
  font-size: 45px;
`;

const CrossLine = styled(OverLap)`
  width: 580px;
  border: 0;
  border-top: 2px solid black;
  margin-top: 12px;
`;

const InfoDiv = styled(OverLap)`
  width: 360px;
  height: 80px;
  margin-top: 60px;
  font-size: 24px;
`;

const ButtonDiv = styled(OverLap)`
  width: 240px;
  margin-top: 32px;
`;

const Confirm = () => {
  return (
    <BackgroundMain>
      <MainText>비밀번호 변경</MainText>
      <CrossLine />
      <InfoDiv>
        <p>비밀번호 변경 메일이 발송되었습니다.</p>
      </InfoDiv>
      <ButtonDiv>
        <Button size="large">로그인으로 돌아가기</Button>
      </ButtonDiv>
    </BackgroundMain>
  );
};
export default Confirm;
