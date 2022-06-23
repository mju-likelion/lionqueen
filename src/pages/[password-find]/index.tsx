import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '../../DesignSystem/Button';

const user = [
  { name: '김멋사', email: 'lion1@likelion.org' },
  { name: '이멋사', email: 'lion2@likelion.org' },
  { name: '박멋사', email: 'lion3@likelion.org' },
];

const Find = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const isUser = user.find(findUser);
    if (isUser?.name === userName && isUser?.email === userEmail) {
      setUserName('');
      setUserEmail('');
      setErrorMessage('');
      routePage();
    } else {
      setErrorMessage(
        errorMessage => '이름 및 이메일을 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.',
      );
      console.log('메일 발송 실패..');
    }
  };

  const findUser = (element: string) => {
    if (element.name === userName && element.email === userEmail) {
      return element;
    }
  };

  const routePage = () => {
    console.log('메일 발송 성공!');
    Router.push({
      pathname: '/password-find/confirm',
      query: { backtoLogin: '비밀번호 변경 메일이 발송되었습니다.' },
    });
  };
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
      <form onSubmit={onSubmit}>
        <InputDiv>
          <InputGroup id="id" label="이름" labelPos="left" labelDist={20}>
            <input
              placeholder="이름을 입력하세요"
              name="input"
              id="id"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              style={{ marginLeft: '50px' }}
            />
          </InputGroup>
        </InputDiv>
        <InputDiv>
          <InputGroup
            id="password"
            label="이메일주소"
            labelPos="left"
            labelDist={20}
            error={errorMessage}
            fullWidth
          >
            <input
              placeholder="이메일 주소를 입력하세요"
              name="input"
              id="password"
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
            />
          </InputGroup>
        </InputDiv>
        <ButtonDiv>
          <Button size="medium" type="submit">
            비밀번호 찾기
          </Button>
        </ButtonDiv>
      </form>
    </BackgroundMain>
  );
};

const OverLap = styled.div`
  display: flex;
  margin: 0 auto;
  font-family: 'Maplestory OTF';
`;

const MainText = styled(OverLap)`
  width: 256px;
  padding-top: 44px;
  font-size: 45px;
`;

const CrossLine = styled(OverLap)`
  width: 600px;
  border: 0;
  border-top: 2px solid black;
  margin-top: 12px;
`;

const InfoDiv = styled(OverLap)`
  flex-direction: column;
  width: 546px;
  margin-top: 28px;
`;

const InputDiv = styled(OverLap)`
  width: 546px;
  height: 36px;
  margin-top: 41px;
  margin-left: 244px;
  font-size: 20px;
  input {
    width: 306px;
    height: 38px;
    border-radius: 10px;
  }
  input[placeholder='이름을 입력하세요'] {
    font-size: 14px;
  }
  input[placeholder='이메일 주소를 입력하세요'] {
    font-size: 14px;
  }
  & + & {
    margin-top: 13px; // 피그마에서 홀수 처리된 부분
  }
`;
const ButtonDiv = styled(OverLap)`
  width: 160px;
  height: 40px;
  margin-top: 48px;
`;

export default Find;
