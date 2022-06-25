import type { ComponentPropsWithoutRef } from 'react';
import { ThemeProvider } from 'styled-components';
import * as Style from './styles';
import { theme } from '~/styles/theme';

type Props = {
  children: React.ReactNode;
  id?: string;
  label?: React.ReactNode;
  error?: string;
  fullWidth?: boolean;
  labelPos?: 'up' | 'left';
  labelDist?: number;
} & ComponentPropsWithoutRef<'input'>;

function InputGroup({
  children,
  id,
  label,
  error = '',
  labelPos = 'up',
  labelDist = 0,
  fullWidth,
}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Style.Container fullWidth={fullWidth} labelPos={labelPos} dist={labelDist}>
        <Style.LabelBox htmlFor={id} error={error}>
          {label}
        </Style.LabelBox>
        <Style.Content>
          <Style.InputBox pos={labelPos} dist={labelDist}>
            {children}
          </Style.InputBox>
          {error !== '' && <Style.ErrorBox>{error}</Style.ErrorBox>}
        </Style.Content>
      </Style.Container>
    </ThemeProvider>
  );
}

export default InputGroup;
