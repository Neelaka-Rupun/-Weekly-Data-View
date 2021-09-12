import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../../Redux/counter/counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return <div></div>;
}
