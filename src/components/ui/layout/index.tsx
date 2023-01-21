import { ChildrenProps } from "@/types";
import { twMerge } from "tailwind-merge";

type LayoutProps = ChildrenProps & {
  className?: string;
  id?: string;
};

const Layout = ({ className, id, children }: LayoutProps) => {
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

export default Layout;
