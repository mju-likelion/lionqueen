import React from 'react';
import styled from 'styled-components';
import Button from '~DesignSystem/Button';
import InputGroup from '~DesignSystem/InputGroup';

type FormContainerProps = {
  labelName?: string;
  placeholder: string;
  name: string;
  id: string;
  btnTitle?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
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
}) => {
  return (
    <FormWrapper>
      <InputGroup id={id} label={labelName} labelPos="left" labelDist={20} error={error} fullWidth>
        <input
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          name={name}
          id={id}
        />
      </InputGroup>
      <StyledButton>{btnTitle ? <Button size="small">{btnTitle}</Button> : ''}</StyledButton>
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

const StyledButton = styled.div`
  width: 145px;
`;

export default FormContainer;
