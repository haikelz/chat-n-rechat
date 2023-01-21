import { ChildrenProps } from "@/types";
import { twMerge } from "tailwind-merge";

type SectionDescriptionProps = ChildrenProps & {
  className?: string;
};

export const SectionDescription = ({ children, className }: SectionDescriptionProps) => {
  return (
    <p className={twMerge("font-sanspro text-[16px] leading-[26px] text-dark/60", className)}>
      {children}
    </p>
  );
};
