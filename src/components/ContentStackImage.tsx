import React from "react";
import Image from "next/image";

interface ContentStackImageProps {
  url: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  containerSx?: object;
}

export const ContentStackImage: React.FC<ContentStackImageProps> = ({
  url,
  alt = "",
  width = "100%",
  height = "100%",
  style = {},
  containerSx = {},
}) => (
  <div style={{ width, height, position: "relative", ...containerSx }}>
    <Image
      src={url}
      alt={alt}
      fill
      style={{ objectFit: "cover", position: "absolute", ...style }}
      sizes="100vw"
      priority
    />
  </div>
);
