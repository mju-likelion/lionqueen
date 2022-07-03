import { useFormik } from 'formik';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~DesignSystem/Button';
import { FormContainer } from '~components/SignUp';
import { SignUpValidationSchema } from '~lib/validation';

type InitialValues = {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
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
      name: '',
      phone: '',
      code: '',
      privacyCheck: [],
    },
    onSubmit: values => {
      // 콘솔 지울예정 api 수정필요
      console.log(values);
    },
    validationSchema: SignUpValidationSchema,
  });

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
            btnTitle="이메일 전송"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formError('email')}
            onClick={() => {
              // 이메일인증  api연결예정
              console.log('이메일인증 버튼');
            }}
          />
          <FormContainer
            placeholder="인증코드를 입력하세요."
            name="code"
            id="code"
            btnTitle="인증 코드 확인"
            onChange={formik.handleChange}
            value={formik.values.code}
            onBlur={formik.handleBlur}
            error={formError('code')}
            onClick={() => {
              // 인증코드 확인 api연결예정
              console.log('인증코드확인 버튼');
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
            error={
              formik.values.password !== '' && formik.touched.password
                ? formik.errors.password && formik.errors.password
                : undefined
            }
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
            placeholder="한글로 입력하세요."
            labelName="이름"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formError('name')}
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
          <Button
            size="medium"
            type="submit"
            disabled={
              !!formik.errors.email ||
              !!formik.errors.password ||
              !!formik.errors.passwordConfirm ||
              !!formik.errors.name ||
              !!formik.errors.phone ||
              !!formik.errors.code ||
              !formik.values.privacyCheck.length
            }
          >
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
  margin: 16px 0;
`;

const Privacy = styled.div`
  margin: 20px;
  color: #838383;

  input {
    margin-right: 10px;
  }
`;

export default SignUp;
