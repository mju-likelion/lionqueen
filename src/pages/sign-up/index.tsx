import { useFormik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~DesignSystem/Button';
import { FormContainer } from '../../components/SignUp';

interface InitialValues {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  code: string;
}

const SignUp = () => {
  const formik = useFormik<InitialValues>({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phone: '',
      code: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <BackgroundMain>
      <SignUpContainer>
        <Title>회원가입</Title>
        <Line />
        <form onSubmit={formik.handleSubmit}>
          <FormContainer
            labelName="아이디(이메일)"
            placeholder="이메일 주소를 입력하세요."
            name="email"
            id="email"
            btnTitle="이메일 전송"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormContainer
            placeholder="인증코드를 입력해주세요."
            name="code"
            id="code"
            btnTitle="인증 코드 확인"
            onChange={formik.handleChange}
            value={formik.values.code}
          />
          <FormContainer
            labelName="비밀번호"
            placeholder="영문과 숫자를 조합해 6-10자를 써주세요."
            name="password"
            id="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <FormContainer
            placeholder="비밀번호를 한번 더 입력하세요."
            labelName="비밀번호 확인"
            name="passwordConfirm"
            id="passwordConfirm"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
          <FormContainer
            placeholder="한글로 입력하세요."
            labelName="이름"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <FormContainer
            placeholder="'-'구분 없이 입력하세요."
            labelName="휴대폰 번호"
            name="phone"
            id="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <Privacy>
            <input type="checkbox" />
            (필수) 본인은 만 14세 이상이며 이메일 주소 수집에 동의합니다.
          </Privacy>
          <Button size="medium" type="submit">
            가입하기
          </Button>
        </form>
      </SignUpContainer>
    </BackgroundMain>
  );
};

const SignUpContainer = styled.div`
  width: 675px;
  margin: 0 auto;
  padding: 20px 0;
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

export default SignUp;
