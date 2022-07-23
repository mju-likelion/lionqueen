/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Axios from '~lib/axios';

import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~DesignSystem/Button';
import { FormContainer } from '~components/SignUp';
import { SignUpValidationSchema } from '~lib/validation';

import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';
import Notice from '~components/Notice/Notice';

type InitialValues = {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  phone: string;
  code: string;
  privacyCheck: string[];
};

const SignUp = () => {
  const [isInput, setIsInput] = useState(false);
  const [isBtn, setIsBtn] = useState(true);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSendMail = () => {
    dispatch(showNotice('이메일 전송이 완료되었습니다. 이메일을 확인해주세요.'));
  };
  const handleEmailVerify = () => {
    dispatch(showNotice('이메일 인증이 완료되었습니다.'));
  };
  const handleSignUp = () => {
    dispatch(showNotice('회원가입에 성공하였습니다.'));
  };
  const handleFailure = (err: any) => {
    dispatch(showNotice(err));
  };
  const formik = useFormik<InitialValues>({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      nickname: '',
      phone: '',
      code: '',
      privacyCheck: [],
    },
    onSubmit: async values => {
      try {
        await Axios.post('/api/auth/sign-up', {
          email: values.email,
          password: values.password,
          name: values.nickname,
          phone: values.phone,
        });
        handleSignUp();
        router.push('/sign-in');
      } catch (err: any) {
        handleFailure(err.response.data.data.error);
      }
    },
    validationSchema: SignUpValidationSchema,
  });
  const formError = (field: keyof InitialValues) => {
    return !!formik.values[field] && formik.touched[field] ? formik.errors[field] : undefined;
  };

  const sendMail = async () => {
    if (formik.values.email) {
      try {
        await Axios.post('/api/auth/send-email', {
          email: formik.values.email,
        });
        handleSendMail();
      } catch (err: any) {
        handleFailure(err.response.data.data.error);
      }
    }
  };
  const emailVerify = async () => {
    if (formik.values.code && formik.values.email) {
      try {
        await Axios.post('/api/auth/email-verify', {
          email: formik.values.email,
          token: formik.values.code,
        });
        handleEmailVerify();
        setIsInput(true);
        setIsBtn(false);
      } catch (err: any) {
        handleFailure(err.response.data.data.error);
      }
    }
  };
  const formDisabled =
    !!formik.errors.email ||
    !!formik.errors.password ||
    !!formik.errors.passwordConfirm ||
    !!formik.errors.nickname ||
    !!formik.errors.phone ||
    !!formik.errors.code ||
    !formik.values.privacyCheck.length;

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
            btnTitle={isBtn && '이메일 전송'}
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formError('email')}
            btnDisabled={!formik.values.email || !!formik.errors.email}
            inputDisabled={isInput}
            onClick={sendMail}
          />
          <FormContainer
            placeholder="인증코드를 입력하세요."
            name="code"
            id="code"
            btnTitle={isBtn && '인증 코드 확인'}
            onChange={formik.handleChange}
            value={formik.values.code}
            onBlur={formik.handleBlur}
            error={formError('code')}
            btnDisabled={
              !formik.values.email ||
              !formik.values.code ||
              !!formik.errors.email ||
              !!formik.errors.code
            }
            inputDisabled={isInput}
            onClick={emailVerify}
          />
          <FormContainer
            labelName="비밀번호"
            placeholder="6-10자의 영문, 숫자를 조합해서 입력하세요."
            name="password"
            id="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={formError('password')}
          />
          <FormContainer
            placeholder="비밀번호를 한번 더 입력하세요."
            labelName="비밀번호 확인"
            name="passwordConfirm"
            id="passwordConfirm"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
            onBlur={formik.handleBlur}
            error={formError('passwordConfirm')}
          />
          <FormContainer
            placeholder="닉네임을 입력하세요."
            labelName="닉네임"
            name="nickname"
            id="nickname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nickname}
            error={formError('nickname')}
          />
          <FormContainer
            placeholder="'-' 구분 없이 입력하세요."
            labelName="휴대폰 번호"
            name="phone"
            id="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            error={formError('phone')}
          />
          <Privacy>
            <label htmlFor="privacy">
              <input
                type="checkbox"
                name="privacyCheck"
                id="privacy"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="privacy"
                checked={formik.values.privacyCheck.includes('privacy')}
              />
              (필수) 본인은 만 14세 이상이며 이메일 주소 수집에 동의합니다.
            </label>
          </Privacy>
          <StyledButton size="medium" type="submit" disabled={formDisabled}>
            가입하기
          </StyledButton>
          <Notice />
        </form>
      </SignUpContainer>
    </BackgroundMain>
  );
};

const SignUpContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 675px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 45px;
`;

const Line = styled.div`
  margin: 16px 0;
  border-top: 2px solid ${({ theme }) => theme.colors.text};
`;

const Privacy = styled.div`
  margin: 20px;
  color: #838383;

  input {
    margin-right: 10px;
  }
`;

const StyledButton = styled(Button)`
  position: relative;
  z-index: 1;
`;

export default SignUp;
