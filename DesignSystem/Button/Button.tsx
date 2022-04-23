import type { PropsWithChildren } from "react";
import { cls } from "../../lib/utils";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  variant?: "outlined" | "filled";
  size?: "small" | "medium" | "large";
  className?: string;
  color: string;
  backgroundColor?: string;
  fullWidth?: boolean;
}

const getSize = (size: string) => {
  switch (size) {
    case "small":
      return "w-52";
    case "medium":
      return "w-80";
    case "large":
      return "w-[400px]";
  }
};

const getClassNames = (className: string) =>
  className
    .split(" ")
    .map((a) => `${a} !important`)
    .join(" ");

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    type = "button",
    size = "medium",
    variant = "outlined",
    className = "",
    color = "primary-orange",
    backgroundColor = "bg-white",
    fullWidth = false,
    children,
    ...restProps
  } = props;

  className;

  const styles = cls(
    variant === "filled"
      ? `${backgroundColor} text-white`
      : `border-2 border-${color} text-${color} hover:bg-${color} hover:text-white`,
    fullWidth ? "w-full" : getSize(size)!,
    getClassNames(className)
  );

  console.log(styles);

  return (
    <button type={type} className={styles} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
