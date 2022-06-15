import React, { useEffect, useState } from "react";

import "./carusel.css";

export const Carusel = () => {
  const [imagesIndex, setImagesIndex] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [idMainImg, setIdMainImg] = useState();
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const random = Math.floor(Math.random() * (imagesIndex.length - 1 + 1));
    setIdMainImg(random);
  }, []);

  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        const random = Math.floor(Math.random() * (imagesIndex.length - 1 + 1));
        setIdMainImg(random);
      }, 1000);
    }
    if (isPaused) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const startStopRender = () => {
    if (isPaused) {
      setIsPaused(false);
    }
    if (!isPaused) {
      setIsPaused(true);
    }
    return isPaused;
  };
  console.log(isPaused);
  console.log(idMainImg);
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
      <button onClick={startStopRender}>{isPaused ? "Start" : "Stop"}</button>
    </div>
  );
};
