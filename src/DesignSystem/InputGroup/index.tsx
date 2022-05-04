import type { ComponentPropsWithoutRef } from "react";
import { cls, getClassNames } from "~lib/utils";

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
  labelPos?: "up" | "left";
  labelDist?: number;
} & ComponentPropsWithoutRef<"input">;

function getlabelDist(
  pos: Props[keyof Pick<Props, "labelPos">],
  dist: Props[keyof Pick<Props, "labelDist">]
) {
  return pos === "up"
    ? { marginTop: `${dist}px` }
    : { marginLeft: `${dist}px` };
}

function InputGroup({
  id,
  label,
  error,
  value,
  placeholder,
  className = "",
  labelClassName = "",
  inputClassName = "",
  errorClassName = "",
  labelPos,
  labelDist,
  fullWidth,
}: Props) {
  const styles = cls(
    "flex",
    fullWidth ? "w-full" : "w-fit",
    labelPos === "up" ? "flex-col" : "items-center",
    getClassNames(className)
  );

  return (
    <div className={styles}>
      <label htmlFor={id} className={cls("w-max", labelClassName)}>
        {label}
      </label>
      <div
        style={{ ...getlabelDist(labelPos, labelDist) }}
        className="space-y-1"
      >
        <input
          name={id}
          value={value}
          placeholder={placeholder}
          className={cls(
            "border-[3px] border-primary-orange rounded-md px-2 py-1 placeholder:text-placeholder ",
            inputClassName
          )}
        />
        <div className={cls("text-primary-error text-xs", errorClassName)}>
          {error}
        </div>
      </div>
    </div>
  );
}

export default InputGroup;
