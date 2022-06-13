import React, { useState } from "react";
import "./rgbColorPickerFrame.css";

export const RgbColorPickerFrame = () => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  const [rgbNumbers, setRgbNumbers] = useState([]);

  const createColor = (e) => {
    e.preventDefault();
    setRgbNumbers([
      ...rgbNumbers,
      {
        red: red,
        green: green,
        blue: blue,
      },
    ]);
    generateRandomRgb();
  };

  const generateRandomRgb = () => {
    setRed(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
    setGreen(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
    setBlue(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
  };

  return (
    <div>
      <h2 className="rgb-title">RgbColorPicker</h2>
      <form className="rgb-inputs" onSubmit={createColor}>
        <p>Please insert numbers from 0 to 255</p>
        <p>RED</p>
        <input
          className="input-rgb"
          type="range"
          min="0"
          max="255"
          step="1"
          placeholder="RED"
          value={red || ""}
          onChange={(e) => setRed(Number(e.target.value))}
        />
        {red}
        <p>GREEN</p>
        <input
          className="input-rgb"
          type="range"
          min="0"
          max="255"
          step="1"
          placeholder="GREEN"
          value={green || ""}
          onChange={(e) => setGreen(Number(e.target.value))}
        />
        {green}
        <p>BLUE</p>
        <input
          className="input-rgb"
          type="range"
          min="0"
          max="255"
          step="1"
          placeholder="BLUE"
          value={blue || ""}
          onChange={(e) => setBlue(Number(e.target.value))}
        />
        {blue}
        <br />
        <button>Random Color</button>
      </form>
      <div className="rgb-color-box">
        <div
          className="rgb-color"
          style={{
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          }}
        ></div>
      </div>
    </div>
  );
};
