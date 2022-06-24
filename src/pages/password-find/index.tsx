import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '../../DesignSystem/Button';

const user = [
  // 임의로 작성한 로그인 가능한 계정들
  { name: '김멋사', email: 'lion1@likelion.org' },
  { name: '이멋사', email: 'lion2@likelion.org' },
  { name: '박멋사', email: 'lion3@likelion.org' },
];

const Find = () => {
  // 유저의 이름과 이메일, 에러메시지는 useState로 관리
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 배열의 요소에서 name과 email이 userName과 userEmail과 일치한다면
  // { name: element.name, email: element.email }을 반환합니다.
  const findUser = element => {
    if (element.name === userName && element.email === userEmail) {
      return element;
    }
  };

  // onClick에 들어갈 페이지 이동 함수로 따로 분리를 해주었습니다.
  const routePage = () => {
    Router.push({
      pathname: '/password-find/confirm',
      // 다음의 query를 통해 confirm.tsx에서 여러가지 문구를 나타낼 수 있습니다.
      query: { backtoLogin: '비밀번호 변경 메일이 발송되었습니다.' },
    });
  };

  const onClick = () => {
    // { ... } 안에 있는 속성을 사용하기 위해 isUser 변수를 사용했습니다.
    const isUser = user.find(findUser);
    // 배열의 조건에 만족하지 않는다면 undefined를 반환하기 떄문에 ? 를 사용했습니다.
    if (isUser?.name === userName && isUser?.email === userEmail) {
      setUserName('');
      setUserEmail('');
      setErrorMessage('');
      routePage();
    } else {
      setErrorMessage(
        // 다음의 setter 함수를 통해 빈 값이 기본값인 에러메시지에 내용을 추가해줍니다.
        errorMessage => `이름 및 이메일을 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.`,
      );
    }
  };

  return (
    <BackgroundMain>
      <MainText>비밀번호 찾기</MainText>
      <CrossLine />
      <InfoDiv>
        {/* 아래의 div가 하나로 잡혀 있어서 font-size를 참고하여 marginTop을 주었습니다. */}
        <p>본인확인 이메일로 인증</p>
        <p>본인확인 이메일 주소와 입력한 이메일 주소가 같아야 인증번호를 받을 수 있습니다.</p>
      </InfoDiv>
      <InputDiv>
        <InputGroup id="id" label="이름" labelPos="left" labelDist={20}>
          <input
            placeholder="이름을 입력하세요"
            name="input"
            id="name"
            value={userName}
            onChange={e => setUserName(e.target.value)}
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
            id="email"
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
          />
        </InputGroup>
      </InputDiv>
      <ButtonDiv>
        {/* onClick으로 할지 onSubmit으로 할지 논의가 필요합니다. */}
        <Button size="medium" onClick={onClick}>
          비밀번호 찾기
        </Button>
      </ButtonDiv>
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
  width: 514px;
  margin-top: 28px;
  p:first-child {
    font-size: 24px;
  }
  p:last-child {
    font-size: 16px;
    margin-top: 16px;
  }
`;

const InputDiv = styled(OverLap)`
  width: 546px;
  height: 36px;
  margin-top: 41px;
  margin-left: 244px;
  font-size: 20px;
  // InputDiv 안의 input에 대한 css 속성입니다.
  input {
    width: 306px;
    height: 38px;
    border-radius: 10px;
  }
  // 이름을 입력하세요 인풋에 margin-left를 걸어줍니다.
  #name {
    margin-left: 50px;
  }
  // placeholder에 css 속성을 주기 위해 css 속성선택자를 사용하였습니다.
  input::placeholder {
    font-size: 14px;
  }
  // 같은 요소가 겹칠 경우 간격 사이에 margin-top을 줍니다.
  & + & {
    margin-top: 13px;
  }
`;
const ButtonDiv = styled(OverLap)`
  width: 160px;
  height: 40px;
  margin-top: 48px;
`;

export default Find;
