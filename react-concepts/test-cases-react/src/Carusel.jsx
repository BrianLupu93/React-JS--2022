import React, { useEffect, useState } from "react";

import "./carusel.css";

export const Carusel = () => {
  const [imagesIndex, setImagesIndex] = useState([1, 2, 3, 4, 5, 6, 7]);

  const [idMainImg, setIdMainImg] = useState();

  useEffect(() => {
    const random = Math.floor(Math.random() * (imagesIndex.length - 1 + 1));
    setIdMainImg(random);
  }, []);

  const changeImg = (action) => {
    if (action === "next") {
      if (idMainImg === imagesIndex.length - 1) {
        setIdMainImg(0);
      } else {
        setIdMainImg((prev) => prev + 1);
      }
    }
    if (action === "previous") {
      if (idMainImg === 0) {
        setIdMainImg(imagesIndex.length - 1);
      } else {
        setIdMainImg((prev) => prev - 1);
      }
    }
  };
  console.log(idMainImg - 1, idMainImg, idMainImg + 1);

  return (
    <div className="carusel">
      <div className="carusel-form">
        <div className="carusel-component">
          <div className="left">
            <img
              className="secondary-image"
              src={`images/img${
                imagesIndex[
                  idMainImg > 0 ? idMainImg - 1 : imagesIndex.length - 1
                ]
              }.png`}
              alt=""
            />
          </div>
          <div className="principal">
            <img
              className="main-image"
              src={`images/img${imagesIndex[idMainImg]}.png`}
              alt=""
            />
          </div>
          <div className="right">
            <img
              className="secondary-image"
              src={`images/img${
                imagesIndex[
                  idMainImg < imagesIndex.length - 1 ? idMainImg + 1 : 0
                ]
              }.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <button onClick={() => changeImg("previous")}>PREV</button>
      <button onClick={() => changeImg("next")}>NEXT</button>
    </div>
  );
};
