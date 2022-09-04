import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(false);

  const Display = (event) => {
    // console.log(event);
    if(event.target.id === "click") {
      // console.log(event.target.value)
      // event.target.id = "para"
      setShow(true);
    }
  }
  return (
    <div id="main">
      {show && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button onClick={(e) => Display(e)} id="click">Click</button>
    </div>
  );
}


export default App;
