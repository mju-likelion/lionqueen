import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import * as Style from './styles';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  fontColor?: string;
  disabled?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const Button = (props: ButtonProps) => {
  const {
    size = 'medium',
    className = '',
    fontColor = '',
    children,
    disabled = false,
    ...restProps
  } = props;

  return (
    <Style.Btn
      type="button"
      size={size}
      fontColor={fontColor}
      className={className}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </Style.Btn>
  );
};

export default Button;
