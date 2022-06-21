import React from 'react';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
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
  flex-direction: column;
  width: 546px;
  margin-top: 34px;
`;

const InputDiv = styled(OverLap)`
  width: 546px;
  height: 36px;
  margin-top: 16px;
  font-size: 20px;
  input {
    width: 340px;
    border-radius: 10px;
  }
  & + & {
    margin-top: 16px; // 피그마에서 홀수 처리된 부분
  }
`;
const ButtonDiv = styled(OverLap)`
  width: 112px;
  margin-top: -35px;
  margin-right: 156px;
`;

const Find = () => {
  return (
    <BackgroundMain>
      <MainText>비밀번호 찾기</MainText>
      <CrossLine />
      <InfoDiv>
        <p style={{ fontSize: '24px' }}>본인확인 이메일로 인증</p>
        <p style={{ fontSize: '16px', marginTop: '16px' }}>
          본인확인 이메일 주소와 입력한 이메일 주소가 같아야 인증번호를 받을 수 있습니다.
        </p>
      </InfoDiv>
      <InputDiv>
        <InputGroup id="id" label="이름" labelPos="left" labelDist={20}>
          <input
            placeholder="이름을 입력해주세요"
            name="input"
            id="id"
            style={{ marginLeft: '50px' }}
          />
        </InputGroup>
      </InputDiv>
      <InputDiv>
        <InputGroup id="password" label="이메일주소" labelPos="left" labelDist={20}>
          <input placeholder="이메일주소를 입력해주세요" name="input" id="password" />
        </InputGroup>
      </InputDiv>
      <ButtonDiv>
        <Button size="medium">메일 발송</Button>
      </ButtonDiv>
    </BackgroundMain>
  );
};
export default Find;
