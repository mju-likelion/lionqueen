import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '~DesignSystem/Button';

const Change = () => {
  const [changePassword, setChangePassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [changeError, setChangeError] = useState('');
  const [checkError, setCheckError] = useState('');
  const [disabled, setDisabled] = useState(true);

  const passwordRegex = /^[a-zA-Z0-9]{6,10}$/;

  const firstPasswordError = e => {
    if (passwordRegex.test(e.target.value) === true) {
      setChangeError(changeError => '');
    } else {
      setChangeError(changeError => '6~10자 내에서 영문, 숫자를 조합해서 입력하세요');
    }
  };

  const secondPasswordError = () => {
    if (changeError === '' && changePassword === checkPassword) {
      setCheckError(checkError => '');
      setDisabled(false);
    } else {
      setCheckError(checkError => '비밀번호가 일치하지 않습니다. 다시 시도해주세요');
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (changePassword === checkPassword && changeError === '' && checkError === '') {
      Router.push({
        pathname: '/password-find/confirm',
        query: { backtoLogin: '비밀번호가 성공적으로 변경되었습니다' },
      });
    }
  };

  return (
    <BackgroundMain>
      <MainText>비밀번호 변경</MainText>
      <CrossLine />
      <form onSubmit={onSubmit}>
        <InputDiv>
          <InputGroup
            id="id"
            label="변경 패스워드"
            labelPos="left"
            labelDist={20}
            error={changeError}
            width="148px"
          >
            <input
              name="input"
              id="change"
              type="password"
              value={changePassword}
              placeholder="6~10자의 영문, 숫자를 조합해서 입력하세요"
              onChange={e => setChangePassword(e.target.value)}
              onBlur={firstPasswordError}
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
              placeholder="비밀번호를 한 번 더 입력하세요"
              onChange={e => setCheckPassword(e.target.value)}
              onBlur={secondPasswordError}
            />
          </InputGroup>
        </InputDiv>
        <ButtonDiv>
          <Button size="large" disabled={disabled} type="submit">
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
`;

const MainText = styled(OverLap)`
  width: 256px;
  padding-top: 46px;
  font-size: 45px;
`;

const CrossLine = styled(OverLap)`
  width: 600px;
  border: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.text};
  margin-top: 13px;
`;

const InputDiv = styled(OverLap)`
  width: 546px;
  height: 36px;
  margin-top: 72px;
  font-size: 20px;
  input {
    width: 352px;
    height: 38px;
    border-radius: 10px;
  }
  label {
    width: 206px;
  }
  & + & {
    margin-top: 37px;
  }
`;
const ButtonDiv = styled(OverLap)`
  margin-top: 63px;
  width: 240px;
`;

export default Change;
