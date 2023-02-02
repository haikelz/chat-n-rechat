import { twMerge } from "tailwind-merge";
import { sanspro } from "~lib/utils/fonts";
import { ChildrenProps } from "~types";

type SectionDescriptionProps = ChildrenProps & {
  className?: string;
};

export const SectionDescription = ({ children, className }: SectionDescriptionProps) => {
  return (
    <p className={twMerge("text-[16px] leading-[26px] text-dark/60", sanspro.className, className)}>
      {children}
    </p>
  );
};
