import React, { useState } from "react";
import { RgbColor } from "./RgbColor";
import "./rgbColorPickerFrame.css";

export const RgbColorPickerFrame = () => {
  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [blue, setBlue] = useState();

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
        <input
          className="input-rgb"
          type="number"
          min="0"
          max="255"
          step="1"
          placeholder="RED"
          value={red || ""}
          onChange={(e) => setRed(Number(e.target.value))}
        />

        <input
          className="input-rgb"
          type="number"
          min="0"
          max="255"
          step="1"
          placeholder="GREEN"
          value={green || ""}
          onChange={(e) => setGreen(Number(e.target.value))}
        />

        <input
          className="input-rgb"
          type="number"
          min="0"
          max="255"
          step="1"
          placeholder="BLUE"
          value={blue || ""}
          onChange={(e) => setBlue(Number(e.target.value))}
        />
        <button>Submit</button>
      </form>
      {rgbNumbers.map((rgb) => {
        return <RgbColor red={rgb.red} green={rgb.green} blue={rgb.blue} />;
      })}
    </div>
  );
};
