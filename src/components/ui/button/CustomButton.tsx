import { twMerge } from "tailwind-merge";
import { sanspro } from "~lib/utils/fonts";
import { ChildrenProps } from "~types";

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
        "rounded-md font-semibold transition-all ease-in-out",
        isDropShadow ? "shadow-xl shadow-primary/25" : "",
        sanspro.className,
        className
      )}
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  );
};
