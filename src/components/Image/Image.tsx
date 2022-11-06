import React, { useRef, useState } from "react";
import { notFoundSrc } from "./Image.constants";

type Props = {
  src: string;
  title?: string;
  onClick?: () => void;
};

const Image = ({ src, title, onClick }: Props) => {
  const image = useRef(null);
  const [valid, setValid] = useState(true);

  const checkValid = () => {
    if (!image || !image.current) setValid(false);
  };

  const urlImg = valid ? src : notFoundSrc;
  return (
    <img
      src={urlImg}
      onLoad={checkValid}
      onError={() => setValid(false)}
      ref={image}
      width='200px'
      height='300px'
      alt={title}
      onClick={onClick}
    />
  );
};

export default Image;
