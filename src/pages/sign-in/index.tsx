import { useFormik } from 'formik';
import styled from 'styled-components';
import Router from 'next/router';
import { FormContainer } from '~components/SignUp';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~DesignSystem/Button';

import { SignInValidationSchema } from '~lib/validation';
import Axios from '~lib/axios';
import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';

type InitialValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    dispatch(showNotice('로그인에 성공하였습니다.'));
  };

  const formError = (field: keyof InitialValues) => {
    return !!formik.values[field] && formik.touched[field] ? formik.errors[field] : undefined;
  };

  const formik = useFormik<InitialValues>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        await Axios.post(
          '/api/auth/sign-in',
          {
            email: values.email,
            password: values.password,
          },
          { withCredentials: true },
        );
        handleSignIn();
      } catch (err) {
        formik.values.email = '';
        formik.values.password = '';
      }
    },
    validationSchema: SignInValidationSchema,
  });

  const onClickSignUp = () => {
    Router.push('/sign-up');
  };

  const onClickPasswordFind = () => {
    Router.push('/password-find');
  };

  return (
    <BackgroundMain>
      <MainText>Lion Town</MainText>
      <CrossLine />
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <InputTotalDiv>
          <FormContainer
            labelName="아이디"
            placeholder="아이디(이메일)를 입력하세요"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <FormContainer
            labelName="비밀번호"
            placeholder="비밀번호를 입력하세요"
            name="password"
            id="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formError('password')}
          />
        </InputTotalDiv>
        <ButtonDiv>
          <Button type="submit">로그인</Button>
        </ButtonDiv>
      </form>
      <TextDiv>
        <button type="button" onClick={onClickSignUp}>
          회원가입
        </button>
        <p>|</p>
        <button type="button" onClick={onClickPasswordFind}>
          비밀번호 찾기
        </button>
      </TextDiv>
    </BackgroundMain>
  );
};

const OverLap = styled.div`
  display: flex;
  margin: 0 auto;
`;

const MainText = styled(OverLap)`
  padding-top: 44px;
  width: 264px;
  height: 78px;
  font-size: 55px;
  font-weight: bold;
`;

const CrossLine = styled(OverLap)`
  margin-top: 73px;
  border: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.text};
  width: 716px;
`;

const InputTotalDiv = styled.div`
  margin-top: 60px;
  margin-left: 230px;
  width: 374px;
  height: 102px;

  input {
    width: 306px;
    height: 40px;
  }

  div + div {
    margin-top: 13px;
  }

  label {
    padding-left: 0;
  }

  > div:last-child > div > div > div:last-child {
    margin-left: 5px;
    width: 300px;
  }
`;

const ButtonDiv = styled.div`
  margin-top: -102px;
  margin-left: 624px;

  button {
    width: 115px;
    height: 107px;
  }
`;

const TextDiv = styled(OverLap)`
  margin: 68px auto 0;
  width: 310px;

  button {
    margin: 0 auto;
    font-size: 20px;
  }
`;

export default SignIn;
