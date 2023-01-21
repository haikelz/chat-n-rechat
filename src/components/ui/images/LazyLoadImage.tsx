import Image from "next/image";
import { memo } from "react";

type LazyLoadImageProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const LazyLoadImage = ({ className, src, alt, width, height }: LazyLoadImageProps) => {
  return (
    <Image className={className} src={src} alt={alt} width={width} height={height} loading="lazy" />
  );
};

export default memo(LazyLoadImage);
