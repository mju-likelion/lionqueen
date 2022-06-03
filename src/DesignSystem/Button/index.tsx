import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import * as Style from './styles';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  fontColor?: string;
} & ComponentPropsWithoutRef<'button'>;

const Button = (props: ButtonProps) => {
  const { size = 'medium', className = '', fontColor = '', children, ...restProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <Style.Btn
        type="button"
        size={size}
        fontColor={fontColor}
        className={className}
        {...restProps}
      >
        {children}
      </Style.Btn>
    </ThemeProvider>
  );
};

export default Button;
