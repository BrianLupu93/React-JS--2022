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

    return stopwatches;
  };

  console.log(stopwatches);
  console.log(name);

  return (
    <div className="stopwatch-frame">
      <h2 className="stop-watch-app">StopWatch APP</h2>

      <form onSubmit={createStopwatch} className="stopwatch-details">
        <h3 className="title">StopWatch Details</h3>
        <input vlaue={name} onChange={(e) => setName(e.target.value)} /> Name
        <input
          vlaue={time}
          onChange={(e) => setTime(e.target.value * 60)}
        />{" "}
        Time
        <button>Add stopwatch</button>
      </form>

      <div className="stopwatches">
        <p>Stopwatches</p>
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
