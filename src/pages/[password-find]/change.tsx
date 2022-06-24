import React, { useRef, useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '../../DesignSystem/Button';

const Change = () => {
  const [changePassword, setChangePassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [changeError, setChangeError] = useState('');
  const [checkError, setCheckError] = useState('');
  const [disabled, setDisabled] = useState(true);

  const isChange = (e: any) => {
    const space =
      '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0';
    const passwordRegex = /^[a-zA-Z0-9]{6,10}$/;
    if (!e.target.value || passwordRegex.test(e.target.value)) {
      setChangeError(changeError => '');
    } else {
      setChangeError(changeError => `${space}6~20자 내에서 영문, 숫자를 조합해서 입력하세요`);
    }
  };

  const isCheck = (e: any) => {
    const space = '\u00a0\u00a0';
    if (changeError === '' && changePassword === checkPassword) {
      setCheckError(checkError => '');
      setDisabled(false);
    } else {
      setCheckError(checkError => `${space}비밀번호가 일치하지 않습니다. 다시 시도해주세요`);
    }
  };

  const onClick = e => {
    console.log('click');
    e.preventDefault();
    if (changeError === '' && checkError === '') {
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
      <form>
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
              placeholder="6~10자의 영문, 숫자를 조합해서 입력하세요"
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
              placeholder="비밀번호를 한 번 더 입력하세요"
              onChange={e => setCheckPassword(e.target.value)}
              onBlur={isCheck}
            />
          </InputGroup>
        </InputDiv>
        <ButtonDiv>
          <Button size="large" onClick={onClick} disabled={disabled}>
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
  padding-top: 44px;
  font-size: 45px;
`;

const CrossLine = styled(OverLap)`
  width: 600px;
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
    height: 38px;
    border-radius: 10px;
  }
  input[placeholder='6~10자의 영문, 숫자를 조합해서 입력하세요'] {
    font-size: 14px;
  }
  input[placeholder='비밀번호를 한 번 더 입력하세요'] {
    font-size: 14px;
  }

  & + & {
    margin-top: 37px; // 피그마에서 홀수 처리된 부분
  }
`;
const ButtonDiv = styled(OverLap)`
  margin-top: 63px;
  width: 240px;
`;

export default Change;
