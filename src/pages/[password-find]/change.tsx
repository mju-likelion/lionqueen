import React, { useRef, useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '../../DesignSystem/Button';

const Change = () => {
  // 변경 패스워드를 useState로 관리하였습니다.
  const [changePassword, setChangePassword] = useState('');

  // 변경 패스워드 확인을 useState로 관리하였습니다.
  const [checkPassword, setCheckPassword] = useState('');

  // 변경 패스워드 에러메시지를 useState로 관리하였습니다.
  const [changeError, setChangeError] = useState('');

  // 변경 패스워드 확인 에러메시지를 useState로 관리하였습니다.
  const [checkError, setCheckError] = useState('');

  // 버튼 비활성화 기능을 useState로 관리하였습니다.
  const [disabled, setDisabled] = useState(true);

  //변경 패스워드에서 실행되는 함수입니다.
  const isChange = e => {
    // 디자인시스템에서 가져오는 버튼에서 텍스트, 인풋창, 에러메시지가 한 번에 묶여있어
    // 우선은 에러메시지를 정렬하기 위해서 space를 사용했습니다.
    const space =
      '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0';
    // 정규 표현식으로 6~10자의 영문, 숫자를 포함해야합니다.
    const passwordRegex = /^[a-zA-Z0-9]{6,10}$/;
    // 정규 표현식을 통과하면 에러메시지는 빈칸, 통과하지 못하면 아래의 에러메시지를 띄웁니다.
    if (passwordRegex.test(e.target.value) === true) {
      setChangeError(changeError => '');
    } else {
      setChangeError(changeError => `${space}6~10자 내에서 영문, 숫자를 조합해서 입력하세요`);
    }
  };

  // 변경 패스워드 확인에서 실행되는 함수입니다.
  const isCheck = e => {
    const space = '\u00a0\u00a0';
    // 정규표현식을 통과하고 패스워드가 일치한다면 에러메시지를 비우고 버튼을 활성화합니다.
    if (changeError === '' && changePassword === checkPassword) {
      setCheckError(checkError => '');
      setDisabled(false);
    } else {
      setCheckError(checkError => `${space}비밀번호가 일치하지 않습니다. 다시 시도해주세요`);
    }
  };

  // 버튼을 클릭할 때 실행되는 함수입니다.
  const onClick = e => {
    // 버튼 비활성화가 풀렸는지 확인할 수 있도록 넣어놨습니다.
    console.log('click');
    // 에러를 모두 해결했다면 확인 페이지로 이동합니다.
    // query를 줌으로써 confirm.tsx는 다양한 텍스트를 띄울 수 있게 되었습니다.
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
  // InputDiv 안의 input에 대한 css 속성입니다.
  input {
    width: 352px;
    height: 38px;
    border-radius: 10px;
  }
  // placeholder에 css 속성을 주기 위해 css 속성선택자를 사용하였습니다.
  input[placeholder='6~10자의 영문, 숫자를 조합해서 입력하세요'] {
    font-size: 14px;
  }
  input[placeholder='비밀번호를 한 번 더 입력하세요'] {
    font-size: 14px;
  }
  // 같은 요소가 겹칠 경우 간격 사이에 margin-top을 줍니다.
  & + & {
    margin-top: 37px;
  }
`;
const ButtonDiv = styled(OverLap)`
  margin-top: 63px;
  width: 240px;
`;

export default Change;
