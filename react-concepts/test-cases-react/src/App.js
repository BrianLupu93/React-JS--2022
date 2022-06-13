import "./App.css";
import { Carusel } from "./CaruselForm";
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
