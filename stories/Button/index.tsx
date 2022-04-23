import type { PropsWithChildren } from "react";
import { cls } from "../../lib/utils";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  variant?: "outlined" | "filled";
  size?: "small" | "medium" | "large";
  className?: string;
  color: string;
  label: string;
  backgroundColor?: string;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    type = "button",
    size = "medium",
    variant = "outlined",
    className = "",
    color = "border-primary-orange",
    backgroundColor = "bg-white",
    children,
    ...restProps
  } = props;

  const styles = cls(
    variant === "filled" ? backgroundColor : `border-${color}`,
    className
  );

  return (
    <button className={styles} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
