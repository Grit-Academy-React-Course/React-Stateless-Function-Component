import React, { Fragment, useState } from "react";
import StopWatch from "./components/stopWatch/StopWatch";

const App = () => {
  const [seconds, setSeconds] = useState(58);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [interval, setIntervalMethod] = useState(null);
  const [enableStart, setEnableStart] = useState(true);

  const start = () => {
    setEnableStart(false)
    setIntervalMethod(setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000))
  }

  const pause = () => {
    setEnableStart(true)
    clearInterval(interval)
  }

  const reset = () => {
    setSeconds(0)
    setMinutes(0)
    setHours(0)
    clearInterval(interval)
    setEnableStart(true)
  }

  if (seconds === 60) {
    setSeconds(0)
    setMinutes(minutes => minutes + 1)
  }
  if (minutes === 60 && seconds === 60) {
    setMinutes(0)
    setHours(hours => hours + 1)
  }

  return (
    <Fragment>
      <StopWatch
        start={start}
        pause={pause}
        reset={reset}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        enableStart={enableStart}
      />
    </Fragment>
  )
}

export default App;