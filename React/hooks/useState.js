// useState is a React Hook that lets you add a state variable to your component.

// const [state, setState] = useState(initialState)
// useState is a Hook, so you can only call it at the 
// top level of your component or your own Hooks. 
// You can’t call it inside loops or conditions
// useState is used for managing state in our Component,
// benfits: - whenever state will change or update the ,
// react will re-render the component without reloading the page
// Example of useSate:



import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (name.length === 0) {
      alert("enter detail");
      return;
    }

    alert("detail submitted successfully!!");
  }

  return (
    <div className="App">
      {name}
      <h1>Example of useState hook</h1>
      <input
        className="name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
