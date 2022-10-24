import { Fragment, useState } from "react";
import StopWatch from "./components/stopWatch/StopWatch";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [interval, setIntervalMethod] = useState(null);

  const start = () => {
    setIntervalMethod(setInterval(() => {
      setSeconds(seconds => seconds + 1)
      if (seconds === 59) {
        setSeconds(0)
        setMinutes(minutes => minutes + 1)
      }
      if (minutes === 59 && seconds === 59) {
        setMinutes(0)
        setHours(hours => hours + 1)
      }
    }, 1000))
  }

  const pause = () => {
    clearInterval(interval)
  }

  const reset = () => {
    setSeconds(0)
    setMinutes(0)
    setHours(0)
    clearInterval(interval)
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
      />
    </Fragment>
  )
}

export default App;