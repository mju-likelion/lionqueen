import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '~/styles/theme';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '~DesignSystem/Button';

const SignIn = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const mockUpcheck = () => {
    if (userId === 'lionid' && userPassword === 'lionpassword') {
      setErrorMessage('');
      setUserId('');
      setUserPassword('');
    } else {
      setErrorMessage(
        '아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.',
      );
    }
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    mockUpcheck();
  };

  const idChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  return (
    <BackgroundMain>
      <MainText>Lion Town</MainText>
      <CrossLine />
      <form onSubmit={onSubmit}>
        <InputTotalDiv>
          <InputGroup id="id" label="아이디" labelPos="left" labelDist={20}>
            <input
              placeholder="아이디를 입력하세요"
              name="input"
              maxLength={25}
              value={userId}
              onChange={idChange}
            />
          </InputGroup>
          <InputGroup
            id="password"
            label="비밀번호"
            labelPos="left"
            labelDist={20}
            error={errorMessage}
            fullWidth
          >
            <input
              placeholder="비밀번호를 입력하세요"
              name="input"
              maxLength={25}
              value={userPassword}
              onChange={passwordChange}
              type="password"
            />
          </InputGroup>
        </InputTotalDiv>
        <ButtonDiv>
          <Button type="submit">로그인</Button>
        </ButtonDiv>
      </form>
      <TextDiv>
        <button type="button">회원가입</button>
        <p>|</p>
        <button type="button">비밀번호 찾기</button>
      </TextDiv>
    </BackgroundMain>
  );
};

export default SignIn;

const OverLap = styled.div`
  display: flex;
  margin: 0 auto;
`;

const MainText = styled(OverLap)`
  padding-top: 44px;
  width: 264px;
  height: 78px;
  font-size: 55px;
`;

const CrossLine = styled(OverLap)`
  margin-top: 73px;
  border: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.text};
  width: 716px;
`;

const InputTotalDiv = styled.div`
  margin-top: 60px;
  margin-left: 247px;
  width: 374px;
  height: 102px;

  input {
    width: 306px;
    height: 40px;
  }

  div:first-child {
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;

const ButtonDiv = styled.div`
  margin-top: -104px;
  margin-left: 644px;

  button {
    width: 115px;
    height: 107px;
  }
`;

const TextDiv = styled(OverLap)`
  margin: 68px auto 0;
  width: 310px;

  button {
    margin: auto 20px;
    font-size: 20px;
    font-weight: 300;
  }
`;
