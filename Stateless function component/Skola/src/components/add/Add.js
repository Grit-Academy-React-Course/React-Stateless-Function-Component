
/* import React from "react";

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    //number = 0
    increase = () => {
        // this.number = this.number + 1; 
        this.setState({ number: this.state.number + 1 })
        console.log(this.state.number);
    }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.increase}>Increase</button>
            </div>

        )
    }
} */
import { useState } from "react";
const Add = props => {
    //React Hooks
    //State => useState

    /*     let number = 0;
        const increase = () => {
            number = number + 1;
            console.log(number);
        } */
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("Grit")

    const increase = () => {
        setNumber((number) => number + 1)
    }
    const decrease = () => {
        setNumber((number) => number - 1)
    }

    // let name = "Grit"
    const changeMyName = () => {
        //setName("Omar")
        setName(name => name = "Omar")
    }
    return (
        <div>
            {console.log(props)}
            <h1>{number}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>decrease</button>
            <h1>{name}</h1>
            <button onClick={changeMyName}>Change my name</button>
        </div>
    )
}
export default Add;