import React, { useState } from "react";
import "./caruselComponent.css";

export const CaruselComponent = (props) => {
  const mainImgSrc = `images/img${props.idMainImg}.png`;
  const prevImgSrc = `images/img${props.idPrevImg}.png`;
  const nextImgSrc = `images/img${props.idNextImg}.png`;

  return (
    <div className="carusel-component">
      <div className="left">
        <img className="secondary-image" src={prevImgSrc} alt="" />
      </div>
      <div className="principal">
        <img className="main-image" src={mainImgSrc} alt="" />
      </div>
      <div className="right">
        <img className="secondary-image" src={nextImgSrc} alt="" />
      </div>
    </div>
  );
};
