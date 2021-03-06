import { useState } from "react";
import { Stopwatch } from "./Stopwatch";

function StopwatchFame() {
  const [name, setName] = useState();
  const [time, setTime] = useState();
  const [id, setId] = useState(1);

  const [stopwatches, setStopwatches] = useState([]);

  const clearInputs = () => {
    document.querySelector(".stopwatch-details").reset();
  };

  const createStopwatch = (event) => {
    event.preventDefault();

    setId(id + 1);

    setStopwatches([
      ...stopwatches,
      {
        name: name ? name : "Default USER",
        time: time,
        id: id,
      },
    ]);

    clearInputs();
    setName();
    setTime();

    return stopwatches;
  };

  return (
    <div className="stopwatch-frame">
      <h2 className="stop-watch-app">StopWatch APP</h2>

      <form onSubmit={createStopwatch} className="stopwatch-details">
        <input
          vlaue={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Input the user name..."
        />{" "}
        Name
        <input
          type="number"
          vlaue={time}
          onChange={(e) => setTime(e.target.value * 60)}
          required={true}
          placeholder="How Many minutes?"
        />
        Time
        <button>Start stopwatch</button>
      </form>

      <div className="stopwatches">
        <h2>Stopwatches</h2>
        {stopwatches.map((stopwatch) => {
          return (
            <Stopwatch
              key={stopwatch.id}
              name={stopwatch.name}
              time={stopwatch.time}
              id={stopwatch.key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StopwatchFame;
