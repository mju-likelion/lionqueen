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

  const idChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setUserId(e.target.value);
  };

  const passwordChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setUserPassword(e.target.value);
  };

  return (
    <BackgroundMain>
      <MainText>Lion Town</MainText>
      <CrossLine />
      <form onSubmit={onSubmit}>
        <InputTotalDiv>
          <InputDiv>
            <InputGroup id="id" label="아이디" labelPos="left" labelDist={20}>
              <input
                placeholder="아이디를 입력하세요"
                name="input"
                id="id"
                maxLength={25}
                value={userId}
                onChange={idChange}
              />
            </InputGroup>
          </InputDiv>
          <InputDiv>
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
                id="password"
                maxLength={25}
                value={userPassword}
                onChange={passwordChange}
                type="password"
              />
            </InputGroup>
          </InputDiv>
        </InputTotalDiv>
        <ButtonDiv>
          <Button id="loginButton" type="submit">
            로그인
          </Button>
        </ButtonDiv>
      </form>
      <TextDiv>
        <button type="submit">비밀번호 찾기</button>
        <p>|</p>
        <button type="submit"> 회원가입</button>
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
  width: 264px;
  height: 78px;
  padding-top: 44px;
  font-size: 55px;
`;

const CrossLine = styled(OverLap)`
  width: 716px;
  border: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.text};
  margin-top: 73px;
`;

const InputTotalDiv = styled.div`
  margin-left: 247px;
  width: 374px;
  height: 102px;
  margin-top: 60px;
  input {
    width: 306px;
    height: 40px;
  }
  #id {
    margin-left: 12px;
  }
`;

const InputDiv = styled.div`
  & + & {
    margin-top: 22px;
  }
`;

const ButtonDiv = styled.div`
  margin-top: -104px;
  margin-left: 644px;
  #loginButton {
    width: 115px;
    height: 107px;
  }
`;

const TextDiv = styled(OverLap)`
  margin-top: 68px;
  font-size: 20px;
  width: 310px;
  justify-content: space-between;
  button:first-child {
    margin: auto 20px;
    font-weight: 300;
    font-size: 20px;
  }
  button:last-child {
    margin: auto 20px;
    font-weight: 300;
    font-size: 20px;
  }
`;
