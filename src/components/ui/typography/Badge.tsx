import { twMerge } from "tailwind-merge";
import { sanspro } from "~lib/utils/fonts";
import { ChildrenProps } from "~types";

type BadgeProps = ChildrenProps & {
  className?: string;
  color: string;
};

export const Badge = ({ children, className, color }: BadgeProps) => {
  return (
    <p
      className={twMerge(
        "text-[14px] font-semibold leading-[18px] tracking-widest",
        `text-${color}`,
        sanspro.className,
        className
      )}
    >
      {children}
    </p>
  );
};
