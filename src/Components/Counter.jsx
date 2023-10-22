import React from "react";
import useCounter from "../Hooks/useCounter";
import { Link } from "react-router-dom";

function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter(0);
  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className="btns">
        <button className="buttons" onClick={increment}>
          Increment
        </button>
        <button className="buttons" onClick={decrement}>
          Decrement
        </button>
        <button className="buttons" onClick={reset}>
          Reset
        </button>
        <div>
          <input
            type="number"
            value={count}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <br></br>
          <br></br>
          <button className="setvalue-button" onClick={() => setValue(count)}>
            Set Value
          </button>{" "}
          <br></br>
          <br></br>
          <br></br>
          <Link to="/error"> Click to see magic </Link>
        </div>
      </div>
    </div>
  );
}
export default Counter;
