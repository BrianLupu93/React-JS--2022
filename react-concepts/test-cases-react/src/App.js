import "./App.css";
import { CaruselForm } from "./CaruselForm";
import { RgbColorPickerFrame } from "./RgbColorPickerFrame";

import StopwatchFame from "./StopwatchFrame";

function App() {
  return (
    <div className="App">
      <StopwatchFame />
      <RgbColorPickerFrame />
      <Carusel />
    </div>
  );
}

export default App;
