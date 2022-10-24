import React, { Fragment, useState } from "react";
import Infoo from "./components/infoo/Infoo";
import Add from "./components/add/Add";
import Array from "./components/array/Array";

/* With function component there is:
    No contructor(props)
    No render
    No class keyword
    No import React
    No extends React.Component
    No this keyword
    No this.state
    No Super(props)
    No lifecycle methods such as componentDidMount osv
*/
/* 
  useState hook is used when we need to implement state in function component.
  Read more about it here: https://reactjs.org/docs/hooks-state.html
*/


/* class Info extends React.Component {
  name = "Omar"
  render() {
    return (
      <div>
        <h1>This is my info component</h1>
        <h2>{this.props.welcomeMessage}</h2>
        <h1>{this.name}</h1>
      </div>
    )
  }
} */


const App = () => {
  /* const showData = (message) => {
    console.log(message);
  } */
  const [showAdd, setShowAdd] = useState(false)

  return (
    <Fragment>
      {/* <Info welcomeMessage="Welcome to app.js" ss="asd" /> */}
      {/* Infoo() */}
      {/* <Infoo welcomeMessage="Welcome to app.js" showData={showData} /> */}
      {showAdd && <Add a="1" b="2"></Add>}
      {<button onClick={() => setShowAdd(showAdd => !showAdd)}>Toggle Add Component</button> /* When showadd is true, the component Add will be visisable. This button toggle the showAdd boolean */}
      {/*  <Array /> */}
    </Fragment>
  )
}

export default App;