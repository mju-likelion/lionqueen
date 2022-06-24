interface ValidationProps {
  [s: string]: (data: string) => {
    result: boolean;
    message: string;
  };
}
export const Validation: ValidationProps = {
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
  phone(data) {
    const regex = /^[0-9]{11}$/i;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: '',
      };
    }

    if (data.length !== 11) {
      return {
        result: false,
        message: '번호는 01012345678 형태로 입력해주세요',
      };
    }

    return {
      result: false,
      message: '번호는 숫자만 입력 해주세요',
    };
  },
};
