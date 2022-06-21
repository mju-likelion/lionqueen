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

const InputDiv = styled(OverLap)`
  width: 546px;
  height: 36px;
  margin-top: 72px;
  font-size: 20px;
  input {
    width: 352px;
    border-radius: 10px;
  }
  & + & {
    margin-top: 16px; // 피그마에서 홀수 처리된 부분
  }
`;
const ButtonDiv = styled(OverLap)`
  margin-top: 54px;
  width: 240px;
`;

const Change = () => {
  const onClick = () => {
    alert('비밀번호가 변경되었습니다.');
  };
  return (
    <BackgroundMain>
      <MainText>비밀번호 변경</MainText>
      <CrossLine />
      <InputDiv>
        <InputGroup id="id" label="변경 패스워드" labelPos="left" labelDist={20}>
          <input name="input" id="change" style={{ marginLeft: '40px' }} type="password" />
        </InputGroup>
      </InputDiv>
      <InputDiv>
        <InputGroup id="password" label="변경 패스워드 확인" labelPos="left" labelDist={20}>
          <input name="input" id="change-confirm" type="password" />
        </InputGroup>
      </InputDiv>
      <ButtonDiv>
        <Button size="large" onClick={onClick}>
          비밀번호 변경
        </Button>
      </ButtonDiv>
    </BackgroundMain>
  );
};
export default Change;
