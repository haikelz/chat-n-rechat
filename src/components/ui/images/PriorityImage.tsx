import Image from "next/image";
import { memo } from "react";

type PriorityImageProps = {
  src: string;
  className?: string;
  width: number;
  height: number;
  alt: string;
};

const PriorityImage = ({ src, className, width, height, alt }: PriorityImageProps) => {
  return (
    <Image
      src={src}
      className={className}
      width={width}
      height={height}
      alt={alt}
      priority={true}
    />
  );
};

export default memo(PriorityImage);
