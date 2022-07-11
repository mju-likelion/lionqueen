import React from 'react';
import styled from 'styled-components';
import Button from '~DesignSystem/Button';
import InputGroup from '~DesignSystem/InputGroup';

interface formContainerProps {
  labelName?: string;
  placeholder: string;
  name?: string;
  id?: string;
  btnTitle?: string;
}

const FormContainer: React.FC<formContainerProps> = ({
  labelName,
  placeholder,
  name,
  id,
  btnTitle,
}) => {
  return (
    <FormWrapper>
      <InputGroup
        inputChild={<input placeholder={placeholder} name={name} />}
        id={id}
        label={labelName}
        labelPos="left"
        labelDist={20}
        fullWidth
      />

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
