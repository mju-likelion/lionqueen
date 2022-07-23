import { useFormik } from 'formik';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

import Router from 'next/router';
import { FormContainer } from '~components/SignUp';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '~DesignSystem/Button';

import { SignInValidationSchema } from '~lib/validation';
import Axios from '~lib/axios';
import { useAppDispatch, useAppSelector } from '~/store';
import * as noticeActions from '~store/modules/notice';

type InitialValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector(({ notice }) => notice.noticeMessage);

  const handleSignIn = useCallback(() => {
    dispatch(noticeActions.Message('로그인에 성공하였습니다.'));
  }, [dispatch]);

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
        console.log(err);
        formik.values.email = '';
        formik.values.password = '';
      }
    },
    validationSchema: SignInValidationSchema,
  });

  const onClickSignUp = () => {
    Router.push({
      pathname: '/sign-up',
    });
  };

  const onClickPasswordFind = () => {
    Router.push({
      pathname: '/password-find',
    });
  };

  return (
    <BackgroundMain>
      <MainText>Lion Town</MainText>
      <CrossLine />
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <InputTotalDiv>
          <FormContainer
            labelName="아이디"
            placeholder="아이디를 입력하세요"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formError('email')}
          />
          <FormContainer
            labelName="비밀번호"
            placeholder="비밀번호를 입력하세요"
            name="password"
            id="password"
            type="password"
            onChange={formik.handleChange}
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
  margin-left: 150px;
  width: 374px;
  height: 102px;

  input {
    width: 306px;
    height: 40px;
  }

  div:first-child {
    margin-bottom: 10px;
    margin-left: 10px;
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
    font-weight: 300;
  }
`;

export default SignIn;
