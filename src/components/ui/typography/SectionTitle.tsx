import { twMerge } from "tailwind-merge";
import { dmSans } from "~lib/utils/fonts";
import { ChildrenProps } from "~types";

type SectionTitle = ChildrenProps & {
  className?: string;
};

export const SectionTitle = ({ className, children }: SectionTitle) => {
  return (
    <h2
      className={twMerge(
        "text-center text-[28px] font-normal leading-[42px] text-dark",
        dmSans.className,
        className
      )}
    >
      {children}
    </h2>
  );
};
