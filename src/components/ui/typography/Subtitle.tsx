import { twMerge } from "tailwind-merge";
import { dmSans } from "~lib/utils/fonts";
import { ChildrenProps } from "~types";

type SubtitleProps = ChildrenProps & {
  className?: string;
};

export const Subtitle = ({ className, children }: SubtitleProps) => {
  return (
    <p className={twMerge("text-[18px] font-medium leading-[26px]", dmSans.className, className)}>
      {children}
    </p>
  );
};
