import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '../../DesignSystem/Button';

const Change = () => {
  const [changePassword, setChangePassword] = useState([]);
  const [checkPassword, setCheckPassword] = useState('');
  const [changeError, setChangeError] = useState('');
  const [checkError, setCheckError] = useState('');

  const isChange = (e: any) => {
    const space = '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0';
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    if (!e.target.value || passwordRegex.test(e.target.value)) {
      setChangeError(changeError => '');
    } else {
      setChangeError(
        changeError => `${space}8~20자 내에서 하나의 문자, 숫자, 특수 문자를 포함해주세요`,
      );
    }
  };

  const isCheck = e => {
    e.preventDefault();
    if (changePassword === checkPassword) {
      alert('비밀번호가 변경되었습니다.');
      Router.push({
        pathname: '/password-find/confirm',
        query: { backtoLogin: '비밀번호가 성공적으로 변경되었습니다' },
      });
    } else {
      setCheckError(checkError => '비밀번호가 일치하지 않습니다. 다시 시도해주세요');
    }
  };

  return (
    <BackgroundMain>
      <MainText>비밀번호 변경</MainText>
      <CrossLine />
      <form onSubmit={isCheck}>
        <InputDiv>
          <InputGroup
            id="id"
            label="변경 패스워드"
            labelPos="left"
            labelDist={20}
            error={changeError}
            fullWidth
          >
            <input
              name="input"
              id="change"
              style={{ marginLeft: '40px' }}
              type="password"
              value={changePassword}
              onChange={e => setChangePassword(e.target.value)}
              onBlur={isChange}
            />
          </InputGroup>
        </InputDiv>
        <InputDiv>
          <InputGroup
            id="password"
            label="변경 패스워드 확인"
            labelPos="left"
            labelDist={20}
            error={checkError}
            fullWidth
          >
            <input
              name="input"
              id="change-confirm"
              type="password"
              value={checkPassword}
              onChange={e => setCheckPassword(e.target.value)}
            />
          </InputGroup>
        </InputDiv>
        <ButtonDiv>
          <Button size="large" type="submit">
            비밀번호 변경
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
  margin-top: 52px;
  font-size: 20px;
  input {
    width: 352px;
    border-radius: 10px;
  }
  & + & {
    margin-top: 36px; // 피그마에서 홀수 처리된 부분
  }
`;
const ButtonDiv = styled(OverLap)`
  margin-top: 54px;
  width: 240px;
`;

export default Change;
