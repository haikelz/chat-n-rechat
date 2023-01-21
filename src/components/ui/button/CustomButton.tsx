import { ChildrenProps } from "@/types";
import { twMerge } from "tailwind-merge";

type CustomButtonProps = ChildrenProps & {
  className?: string;
  label: string;
  onClick?: () => void;
  isDropShadow?: boolean;
};

export const CustomButton = ({
  children,
  className,
  label,
  onClick,
  isDropShadow,
  ...props
}: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={twMerge(
        "rounded-md font-sanspro font-semibold transition-all ease-in-out",
        isDropShadow ? "shadow-xl shadow-primary/25" : "",
        className
      )}
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  );
};
