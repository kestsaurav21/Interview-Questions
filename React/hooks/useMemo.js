//useMemo
// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

//Example;

// Although the counterTwo is independent but still it gets effected. 
// So useMemo is used here
import { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  function incrementOne() {
    setCounterOne(counterOne + 1);
  }

  function incrementTwo() {
    setCounterTwo(counterTwo + 1);
  }

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++; /// this will slow down the application
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className="App">
      {name}
      <h1>Example of useMemo hook</h1>
      <button onClick={incrementOne}>Counter - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementTwo}>Counter - {counterTwo}</button>
    </div>
  );
}
