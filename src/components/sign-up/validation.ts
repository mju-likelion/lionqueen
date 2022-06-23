interface ValidationProps {
  [s: string]: (data: string) => {
    result: boolean;
    message: string;
  };
}
export const Validation: ValidationProps = {
  name(data) {
    const regex = /^[가-힣]*{2,5}$/g;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: '',
      };
    }
    return {
      result: false,
      message: '이름은 한글만 가능합니다',
    };
  },
  id(data) {
    const regex = /^(?=.*[a-z0-9])[a-z0-9]{4,8}$/g;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: '',
      };
    }
    return {
      result: false,
      message: '아이디는 영문과 숫자 조합으로 가능합니다',
    };
  },

  password(data) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,10}$/i;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: '',
      };
    }
    return {
      result: false,
      message: '비밀번호는 8~20자, 문자와 숫자, 특수문자를 포함해야합니다.',
    };
  },

  passwordConfirm(data) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,10}$/i;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: '',
      };
    }
    return {
      result: false,
      message: '비밀번호는 8~20자, 문자와 숫자, 특수문자를 포함해야합니다.',
    };
  },
  email(data) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: '',
      };
    }
    return {
      result: false,
      message: '이메일 형식에 맞지 않습니다.',
    };
  },
};
