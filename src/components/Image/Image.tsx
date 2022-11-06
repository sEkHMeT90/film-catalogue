import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { notFoundSrc } from "./Image.constants";

//TODO: Revisar any
const Image = ({ src, data }: any) => {
  const navigate = useNavigate();
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
      alt={data.title}
      onClick={() =>
        navigate(ROUTES.FILM_DETAILS, { state: { filmData: data } })
      }
    />
  );
};

export default Image;
