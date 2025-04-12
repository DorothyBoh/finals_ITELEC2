import { useReducer } from "react";
import "./CounterOne.css"; // Import the CSS file

const CounterOne = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "reset":
        return { count: 0 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error("Unknown action");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <h3 className="counter-title">Counter</h3>
      <h1 className="counter-value">{state.count}</h1>
      <div className="button-group">
        <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      </div>
    </div>
  );
};

export default CounterOne;
