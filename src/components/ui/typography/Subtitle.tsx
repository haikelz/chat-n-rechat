import { ChildrenProps } from "~types";
import { twMerge } from "tailwind-merge";

type SubtitleProps = ChildrenProps & {
  className?: string;
};

export const Subtitle = ({ className, children }: SubtitleProps) => {
  return (
    <p className={twMerge("font-dmsans text-[18px] font-medium leading-[26px]", className)}>
      {children}
    </p>
  );
};
