import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hello");
    // mount / update
    return () => {
      //unmount
      console.log("hello2");
    };
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>This is an Functional Component</h1>
      <div className="container">
        <button onClick={handleClick}>Count - {count}</button>
      </div>
    </>
  );
};

export default Counter;
