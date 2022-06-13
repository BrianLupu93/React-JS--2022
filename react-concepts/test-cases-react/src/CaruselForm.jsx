import React, { useEffect, useState } from "react";
import { CaruselComponent } from "./CaruselComponent";
import "./caruselForm.css";
import "./caruselComponent.css";

export const CaruselForm = () => {
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
  console.log(idMainImg);
  //const imgNumbers = 7;

  //   const [idMainImg, setIdMainImg] = useState(
  //     Math.floor(Math.random() * (imgNumbers - 1) + 1)
  //   );
  //   const [idPrevImg, setIdPrevImg] = useState(idMainImg - 1);
  //   const [idNextImg, setIdNextImg] = useState(idMainImg + 1);

  //   const prevImg = () => {
  //     if (idPrevImg === 1) {
  //       setIdPrevImg(imgNumbers);
  //     } else {
  //       setIdPrevImg(idPrevImg - 1);
  //     }

  //     if (idNextImg === 1) {
  //       setIdNextImg(imgNumbers);
  //     } else {
  //       setIdNextImg(idNextImg - 1);
  //     }

  //     if (idMainImg === 1) {
  //       setIdMainImg(imgNumbers);
  //     } else {
  //       setIdMainImg(idMainImg - 1);
  //     }
  //   };

  //   const nextImg = () => {
  //     if (idPrevImg === imgNumbers) {
  //       setIdPrevImg(1);
  //     } else {
  //       setIdPrevImg(idPrevImg + 1);
  //     }

  //     if (idNextImg === imgNumbers) {
  //       setIdNextImg(1);
  //     } else {
  //       setIdNextImg(idNextImg + 1);
  //     }

  //     if (idMainImg === imgNumbers) {
  //       setIdMainImg(1);
  //     } else {
  //       setIdMainImg(idMainImg + 1);
  //     }
  //   };

  //   console.log(idPrevImg, idMainImg, idNextImg);

  return (
    <div className="carusel">
      <div className="carusel-form">
        {/*  <CaruselComponent
          idMainImg={idMainImg}
          idPrevImg={idPrevImg}
          idNextImg={idNextImg}
        /> 
  */}
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
