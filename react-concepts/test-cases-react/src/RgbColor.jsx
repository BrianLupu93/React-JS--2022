import React, { useState } from "react";
import "./rgbColor.css";

export const RgbColor = (props) => {
  return (
    <div className="rgb-color-box">
      <div
        className="rgb-color"
        style={{
          backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
        }}
      ></div>
    </div>
  );
};
