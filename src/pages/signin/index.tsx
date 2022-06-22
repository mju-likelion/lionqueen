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
  width: 278px;
  padding-top: 70px;
  font-size: 55px;
`;

const CrossLine = styled(OverLap)`
  width: 716px;
  border: 0;
  border-top: 2px solid black;
  margin-top: 32px;
`;

const InputDiv = styled(OverLap)`
  width: 374px;
  height: 40px;
  margin-top: 61px; //피그마에서 홀수 처리된 부분
  input {
    width: 306px;
  }
  & + & {
    margin-top: 41px; // 피그마에서 홀수 처리된 부분
  }
`;

const LoginDiv = styled(OverLap)`
  width: 160px;
  margin-top: 39px;
`;

const TextDiv = styled(OverLap)`
  margin-top: 37px;
  font-size: 20px;
  width: 310px;
`;

const SignIn = () => {
  return (
    <BackgroundMain>
      <MainText>Lion Town</MainText>
      <CrossLine />
      <InputDiv>
        <InputGroup id="id" label="아이디" labelPos="left" labelDist={20}>
          <input
            placeholder="아이디를 입력해주세요"
            name="input"
            id="id"
            style={{ marginLeft: '12px' }}
          />
        </InputGroup>
      </InputDiv>
      <InputDiv>
        <InputGroup id="password" label="비밀번호" labelPos="left" labelDist={20}>
          <input placeholder="비밀번호를 입력해주세요" name="input" id="password" />
        </InputGroup>
      </InputDiv>
      <LoginDiv>
        <Button size="medium">로그인</Button>
      </LoginDiv>
      <TextDiv>아이디 찾기 | 비밀번호 찾기 | 회원가입</TextDiv>
    </BackgroundMain>
  );
};
export default SignIn;
