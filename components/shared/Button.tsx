import { FormEvent, ReactNode } from "react";

const animation = "transition duration-300 easeInOut";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "accent" | "icon";
  action?: (e?: FormEvent) => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  variant = "primary",
  className,
  children,
  action,
  type = "button",
}: ButtonProps) {
  let styles;

  switch (variant) {
    case "primary":
      styles = "px-4 py-2.5 bg-[#05436e] text-white rounded";
      break;
    case "secondary":
      styles = "rounded border border-grape p-3 w-full text-grape";
      break;
    case "accent":
      styles = "bg-grapelight hover:bg-grape px-4 py-3 rounded-full text-white";
      break;
    case "icon":
      styles =
        "border border-gray-200 shadow hover:shadow-md py-1.5 px-2.5 text-sm flex gap-2 items-center  rounded-md";
      break;
  }
  return (
    <button
      onClick={action}
      className={`${styles} ${className} ${animation}`}
      type={type}
    >
      {children}
    </button>
  );
}
