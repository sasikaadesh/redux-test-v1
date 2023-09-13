import React, { useState } from "react";
import {
  increment,
  decrement,
  reset,
  increaseByAmount,
} from "../features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const amountNum = Number(incrementAmount);

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(resetAll)}>Reset</button>
      </div>
      <div>
        <button onClick={() => dispatch(increaseByAmount(amountNum))}>
          Add Amount
        </button>
      </div>
    </>
  );
};

export default Counter;
