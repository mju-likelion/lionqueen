import React from 'react';
import styled from 'styled-components';
import Button from '~DesignSystem/Button';

interface FormContainerProps {
  labelName?: string;
  placeholder: string;
  name?: string;
  id?: string;
  btnTitle?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({
  labelName,
  placeholder,
  name,
  id,
  btnTitle,
}) => {
  return (
    <FormWrapper>
      <Label htmlFor={id}>{labelName}</Label>
      <Input placeholder={placeholder} name={name} id={id} />
      {btnTitle ? (
        <StyledButton>
          <Button size="small">{btnTitle}</Button>
        </StyledButton>
      ) : (
        <StyledButton />
      )}
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  margin-bottom: 13px;
`;

const Label = styled.label`
  width: 223px;
  padding-left: 76px;
  text-align: left;
`;

const Input = styled.input`
  width: 306px;
  padding: 4px 8px;
  font-size: 14px;
  border: 2px solid ${({ theme }) => theme.colors.primary.orange};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:focus {
    outline: 2px solid #ff9400;
  }
`;

const StyledButton = styled.div`
  width: 145px;
`;

export default FormContainer;
