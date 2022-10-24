const Infoo = (props) => {
    const name = "Omar";
    const clickMe = (e, message) => {
        console.log("Clickme", e);
        props.showData(message);
        //console.log(message);
    }

    return (
        <div>
            <h1>This is my Infoo component</h1>
            {console.log(props)}
            <h2>{props.welcomeMessage}</h2>
            <h1>{name}</h1>
            <button onClick={(event) => clickMe(event, "From Clickme")}>Click me</button>
            <button onClick={(event) => clickMe(event, "From Clickme 2")}>Click me 2</button>
        </div>
    )
}

export default Infoo;