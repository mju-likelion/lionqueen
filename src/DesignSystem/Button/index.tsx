import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import React from "react";
import { cls } from "~lib/utils";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  className?: string;
  color: string;
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

const getSize = (size: string) => {
  switch (size) {
    case "small":
      return "w-28 h-7 text-[18px]";
    case "medium":
      return "w-40 h-[42px] text-[22px]";
    case "large":
      return "w-60 h-12 text-2xl";
  }
};

const getClassNames = (className: string) =>
  className !== ""
    ? className
        .split(" ")
        .map((a) => `${a} !important`)
        .join(" ")
    : "";

const Button = (props: ButtonProps) => {
  const {
    size = "medium",
    className = "",
    color = "primary-orange",
    fullWidth = false,
    children,
    ...restProps
  } = props;

  const styles = cls(
    fullWidth ? "w-full" : getSize(size)!,
    `button-${color}`,
    getClassNames(className)
  );

  return (
    <button className={styles} {...restProps}>
      {children}
    </button>
  );
};
export default Button;
