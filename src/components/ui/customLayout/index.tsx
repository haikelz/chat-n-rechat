import { ChildrenProps } from "~types";
import { twMerge } from "tailwind-merge";

type CustomLayoutProps = ChildrenProps & {
  className?: string;
  id?: string;
};

const CustomLayout = ({ className, id, children }: CustomLayoutProps) => {
  return (
    <section
      id={id}
      className={twMerge(
        "flex w-full max-w-5xl flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};

export default CustomLayout;
