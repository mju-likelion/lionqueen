import React from 'react';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~DesignSystem/Button';
import { FormContainer } from '../../components/sign-up';

const SignUp = () => {
  return (
    <BackgroundMain>
      <SignUpContainer>
        <Title>회원가입</Title>
        <Line /> <br />
        <FormContainer
          labelName="아이디(이메일)"
          placeholder="이메일 주소를 입력하세요."
          name="name"
          id="name"
          btnTitle="이메일 전송"
        />
        <FormContainer
          placeholder="인증코드를 입력해주세요."
          name="code"
          id="code"
          btnTitle="인증 코드 확인"
        />
        <FormContainer
          labelName="비밀번호"
          placeholder="영문과 숫자를 조합해 6-10자를 써주세요."
          name="password"
          id="password"
        />
        <FormContainer
          placeholder="비밀번호를 한번 더 입력하세요."
          labelName="비밀번호 확인"
          name="confirm_password"
          id="confirm_password"
        />
        <FormContainer placeholder="한글로 입력하세요." labelName="이름" name="name" id="name" />
        <FormContainer
          placeholder="'-'구분 없이 입력하세요."
          labelName="휴대폰 번호"
          name="name"
          id="name"
        />
        <Privacy>
          <input type="checkbox" />
          (필수) 본인은 만 14세 이상이며 이메일 주소 수집에 동의합니다.
        </Privacy>
        <StyledButton size="medium">가입하기</StyledButton>
      </SignUpContainer>
    </BackgroundMain>
  );
};

const SignUpContainer = styled.div`
  width: 675px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

const Title = styled.div`
  font-size: 45px;
`;

const Line = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.text};
  margin-top: 16px;
`;

const Privacy = styled.div`
  margin: 20px;
  color: #838383;
  input {
    margin-right: 10px;
  }
`;

const StyledButton = styled(Button)``;

export default SignUp;
