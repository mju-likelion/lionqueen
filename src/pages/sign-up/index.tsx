import { useState, useCallback } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import Axios from '~lib/axios';

import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~DesignSystem/Button';
import { FormContainer } from '~components/SignUp';
import { SignUpValidationSchema } from '~lib/validation';

import { useAppDispatch, useAppSelector } from '~/store';
import * as noticeActions from '~store/modules/notice';
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
  const message = useAppSelector(({ notice }) => notice.noticeMessage);

  const handleSendMail = useCallback(() => {
    dispatch(noticeActions.Message('이메일 전송이 완료되었습니다. 이메일을 확인해주세요.'));
  }, [dispatch]);
  const handleEmailVerify = useCallback(() => {
    dispatch(noticeActions.Message('이메일 인증이 완료되었습니다.'));
  }, [dispatch]);
  const handleSignUp = useCallback(() => {
    dispatch(noticeActions.Message('회원가입에 성공하였습니다.'));
  }, [dispatch]);

  const formError = (field: keyof InitialValues) => {
    return !!formik.values[field] && formik.touched[field] ? formik.errors[field] : undefined;
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
          email: formik.values.email,
        });
        handleSignUp();
      } catch (err) {
        console.log(err);
      }
    },
    validationSchema: SignUpValidationSchema,
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
            btnTitle={isBtn && '이메일 전송'}
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formError('email')}
            btnDisabled={!formik.values.email || !!formik.errors.email}
            inputDisabled={isInput}
            onClick={async () => {
              if (formik.values.email) {
                try {
                  await Axios.post('/api/auth/send-email', {
                    email: formik.values.email,
                  });
                  handleSendMail();
                } catch (err) {
                  console.log(err);
                }
              }
            }}
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
            onClick={async () => {
              if (formik.values.code && formik.values.email) {
                try {
                  await Axios.post('/api/auth/email-verify', {
                    email: formik.values.email,
                  });
                  handleEmailVerify();
                  setIsInput(true);
                  setIsBtn(false);
                } catch (err) {
                  console.log(err);
                }
              }
            }}
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
          <StyledButton
            size="medium"
            type="submit"
            disabled={
              !!formik.errors.email ||
              !!formik.errors.password ||
              !!formik.errors.passwordConfirm ||
              !!formik.errors.nickname ||
              !!formik.errors.phone ||
              !!formik.errors.code ||
              !formik.values.privacyCheck.length
            }
          >
            가입하기
          </StyledButton>
          <Notice contents={message} />
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
