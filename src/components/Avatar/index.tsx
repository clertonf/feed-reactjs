import { ImgHTMLAttributes } from "react";
import styles from "./styles.module.css";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean;
};

export function Avatar({
  hasBorder = true,
  src,
  alt,
  title,
  ...rest
}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
      title={title}
      {...rest}
    />
  );
}
