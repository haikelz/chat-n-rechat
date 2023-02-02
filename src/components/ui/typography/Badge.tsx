import { ChildrenProps } from "~types";
import { twMerge } from "tailwind-merge";

type BadgeProps = ChildrenProps & {
  className?: string;
  color: string;
};

export const Badge = ({ children, className, color }: BadgeProps) => {
  return (
    <p
      className={twMerge(
        `font-sanspro text-[14px] font-semibold leading-[18px] tracking-widest text-${color}`,
        className
      )}
    >
      {children}
    </p>
  );
};
