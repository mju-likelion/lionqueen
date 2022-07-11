import { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import axios from 'axios';

import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~DesignSystem/Button';
import { FormContainer } from '~components/SignUp';
import { SignUpValidationSchema } from '~lib/validation';

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
    onSubmit: values => {
      axios
        .post('/api/auth/sign-up', {
          email: formik.values.email,
          password: formik.values.password,
          name: formik.values.nickname,
          phone: formik.values.phone,
        })
        .then(() => {
          alert('회원가입이 완료되었습니다.');
        })
        .catch(err => {
          console.log(err);
        });
    },
    validationSchema: SignUpValidationSchema,
  });

  const [isInput, setIsInput] = useState(false);
  const [isBtn, setIsBtn] = useState(true);

  const formError = (field: keyof InitialValues) => {
    return !!formik.values[field] && formik.touched[field] ? formik.errors[field] : undefined;
  };

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
            onClick={() => {
              // 이메일인증  api연결예정
              console.log('이메일인증 버튼');
              if (formik.values.email) {
                axios
                  .post('/api/auth/send-email', {
                    email: formik.values.email,
                  })

                  .then(() => {
                    alert('이메일 전송이 완료되었습니다. 3시간내에 인증코드를 입력해주세요.');
                  })
                  .catch(err => {
                    console.log(err);
                  });
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
            onClick={() => {
              if (formik.values.code && formik.values.email) {
                axios
                  .post('/api/auth/email-verify', {
                    email: formik.values.email,
                    token: formik.values.code,
                  })
                  .then(() => {
                    alert('인증이 완료되었습니다.');
                    setIsInput(true);
                    setIsBtn(false);
                  })
                  .catch(err => {
                    alert('인증번호가 일치하지 않습니다.');
                  });
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
  margin: 16px 0;
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
