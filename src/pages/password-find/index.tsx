import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '~DesignSystem/Button';

const user = [
  // 임의로 작성한 로그인 가능한 계정들
  { name: '김멋사', email: 'lion1@likelion.org' },
  { name: '이멋사', email: 'lion2@likelion.org' },
  { name: '박멋사', email: 'lion3@likelion.org' },
];

const Find = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  // 배열의 요소에서 name과 email이 userName과 userEmail과 일치한다면
  // { name: element.name, email: element.email }을 반환합니다.
  const findUser = (element: { name: string; email: string }) => {
    if (element.name === userName && element.email === userEmail) {
      return element;
    }
  };

  const checkUser = () => {
    // { ... } 안에 있는 속성을 사용하기 위해 isUser 변수를 사용했습니다.
    const isUser = user.find(findUser);
    // 배열의 조건에 만족하지 않는다면 undefined를 반환하기 떄문에 ? 를 사용했습니다.
    if (isUser?.name === userName && isUser?.email === userEmail) {
      setUserName('');
      setUserEmail('');
      setErrorMessage('');
      routePage();
    } else {
      setErrorMessage(`이름 및 이메일을 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.`);
    }
  };

  const routePage = () => {
    if (router.pathname === '/password-find') {
      Router.push({
        pathname: '/password-find/confirm',
        query: { backtoLogin: '비밀번호가 성공적으로 변경되었습니다' },
      });
    }
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkUser();
  };

  return (
    <BackgroundMain>
      <MainText>비밀번호 찾기</MainText>
      <CrossLine />
      <InfoDiv>
        <p>본인확인 이메일로 인증</p>
        <p>본인확인 이메일 주소와 입력한 이메일 주소가 같아야 인증번호를 받을 수 있습니다.</p>
      </InfoDiv>
      <form onSubmit={onSubmit}>
        <InputTotalDiv>
          <InputGroup id="id" label="이름" labelPos="left" labelDist={20}>
            <input
              placeholder="이름을 입력하세요"
              name="input"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </InputGroup>
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
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
            />
          </InputGroup>
        </InputTotalDiv>
        <ButtonDiv>
          <Button size="medium" type="submit">
            이메일 전송
          </Button>
        </ButtonDiv>
      </form>
    </BackgroundMain>
  );
};

const OverLap = styled.div`
  display: flex;
  margin: 0 auto;
`;

const MainText = styled(OverLap)`
  padding-top: 45px;
  width: 245px;
  font-size: 45px;
`;

const CrossLine = styled(OverLap)`
  margin-top: 13px;
  border: 0;
  border-top: 2px solid black;
  width: 600px;
`;

const InfoDiv = styled(OverLap)`
  flex-direction: column;
  margin-top: 28px;
  width: 514px;
  height: 80px;
  white-space: pre-wrap;

  p:first-child {
    margin-top: 0;
    font-size: 24px;
  }

  p:last-child {
    margin-top: 0;
    font-size: 16px;
  }
`;

const InputTotalDiv = styled(OverLap)`
  display: table;
  margin-top: 41px;
  margin-left: 244px;
  width: 546px;
  height: 36px;
  font-size: 20px;

  input {
    border-radius: 10px;
    width: 306px;
    height: 38px;
  }

  div:first-child {
    margin-bottom: 13px;
    margin-left: 50px;

    label {
      margin-left: -48px;
      width: 93px;
    }
  }

  input::placeholder {
    font-size: 14px;
  }
`;
const ButtonDiv = styled(OverLap)`
  margin-top: 48px;
  width: 160px;
  height: 40px;
`;

export default Find;
