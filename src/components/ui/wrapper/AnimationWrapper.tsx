import { ChildrenProps } from "~types";

type AnimationWrapperProps = ChildrenProps & {
  className?: string;
};

const AnimationWrapper = ({ className, children, ...props }: AnimationWrapperProps) => {
  return (
    <div
      data-aos-easing="ease-in-out"
      data-aos-mirror={true}
      data-aos-duration="500"
      data-aos-once="false"
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;
