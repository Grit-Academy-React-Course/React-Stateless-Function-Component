const StopWatch = (props) => {

    const addLeadingZeros = (num, totalLength) => {
        return String(num).padStart(totalLength, '0');
    }

    return (
        <div className="stopWatch">
            <h1>{addLeadingZeros(props.hours, 2)}:{addLeadingZeros(props.minutes, 2)}:{addLeadingZeros(props.seconds, 2)}</h1>
            <button disabled={!props.enableStart} className="start" onClick={props.start}>Start</button>
            <button className="pause" onClick={props.pause}>Pause</button>
            <button className="reset" onClick={props.reset}>Reset</button>
        </div>
    )
}

export default StopWatch;