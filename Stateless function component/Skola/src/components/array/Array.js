import { useState } from "react";

const Array = () => {
    const [myArray, setMyArray] = useState(["Volvo"])

    const addNewCar = () => {
        // myArray.push("BMW") WRONG
        // setMyArray(myArray => myArray.push("BMW")) WRONG


        //Option one 
        /* const tempMyArray = myArray;
        tempMyArray.push("BMW");
        setMyArray(myArray => [...tempMyArray])  */

        //Option two is the winner
        setMyArray(myArray => [...myArray, "BMW"])
    }

    return (
        <div>
            <div>
                {myArray.map((value) => {
                    return (
                        <h1>{value}</h1>
                    )
                })}
            </div>
            <button onClick={addNewCar}>Add new car</button>
        </div>
    )
}

export default Array;