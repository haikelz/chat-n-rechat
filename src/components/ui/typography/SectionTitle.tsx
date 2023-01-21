import { ChildrenProps } from "@/types";
import { twMerge } from "tailwind-merge";

type SectionTitle = ChildrenProps & {
  className?: string;
};

export const SectionTitle = ({ className, children }: SectionTitle) => {
  return (
    <h2
      className={twMerge(
        "text-center font-dmsans text-[28px] font-normal leading-[42px] text-dark",
        className
      )}
    >
      {children}
    </h2>
  );
};
