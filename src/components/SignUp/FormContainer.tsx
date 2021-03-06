import React from 'react';
import styled from 'styled-components';
import Button from '~DesignSystem/Button';
import InputGroup from '~DesignSystem/InputGroup';

type FormContainerProps = {
  labelName?: string;
  placeholder: string;
  name: string;
  id: string;
  btnTitle?: string | boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  error?: string[] | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnDisabled?: boolean;
  inputDisabled?: boolean;
};

const FormContainer: React.FC<FormContainerProps> = ({
  onChange,
  onBlur,
  value,
  labelName,
  placeholder,
  name,
  id,
  btnTitle,
  type,
  error,
  onClick,
  btnDisabled,
  inputDisabled,
}) => {
  return (
    <FormWrapper>
      <InputGroup id={id} label={labelName} labelPos="left" error={error} fullWidth>
        <input
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          name={name}
          disabled={inputDisabled}
        />
      </InputGroup>
      <ButtonBox>
        {btnTitle ? (
          <StyledButton size="small" onClick={onClick} disabled={btnDisabled}>
            {btnTitle}
          </StyledButton>
        ) : (
          ''
        )}
      </ButtonBox>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  margin-bottom: 13px;

  label {
    padding-left: 76px;
    width: 223px;
    text-align: left;
  }

  input {
    width: 306px;
  }
`;

const ButtonBox = styled.div`
  width: 145px;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
`;

export default FormContainer;
