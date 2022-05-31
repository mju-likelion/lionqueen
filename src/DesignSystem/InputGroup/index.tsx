import type { ComponentPropsWithoutRef } from 'react';
import { ThemeProvider } from 'styled-components';
import * as Style from './styles';
import { theme } from '../../styles/theme';

type Props = {
  id?: string;
  label?: React.ReactNode;
  error?: string;
  value: string | undefined;
  placeholder: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  fullWidth?: boolean;
  labelPos?: 'up' | 'left';
  labelDist?: number;
} & ComponentPropsWithoutRef<'input'>;

function InputGroup({
  id,
  label,
  error,
  value,
  placeholder,
  className = '',
  labelClassName = '',
  inputClassName = '',
  errorClassName = '',
  labelPos,
  labelDist,
  fullWidth,
}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Style.Container className={className} fullWidth={fullWidth} labelPos={labelPos}>
        <Style.LabelBox htmlFor={id} className={labelClassName}>
          {label}
        </Style.LabelBox>
        <Style.InputBox pos={labelPos} dist={labelDist}>
          <Style.Input
            name={id}
            value={value}
            placeholder={placeholder}
            className={inputClassName}
          />
          <Style.ErrorBox className={errorClassName}>{error}</Style.ErrorBox>
        </Style.InputBox>
      </Style.Container>
    </ThemeProvider>
  );
}

export default InputGroup;
