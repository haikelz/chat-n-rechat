import Image from "next/image";
import { memo } from "react";

type LazyLoadImageProps = {
  src: string;
  className?: string;
  alt: string;
  width: number;
  height: number;
};

const LazyLoadImage = ({ src, className, alt, width, height }: LazyLoadImageProps) => {
  return (
    <Image src={src} className={className} width={width} height={height} alt={alt} loading="lazy" />
  );
};

export default memo(LazyLoadImage);
