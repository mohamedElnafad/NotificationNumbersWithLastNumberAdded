import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../src/redux/index";
import "./styles.css";
import { getData, sendData } from "./gettingData";
const App = (props) => {
  const state = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendData(state.counter));
  }, [dispatch, state.counter]);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  return (
    <>
      {state.loading.status && <h1>Loading</h1>}

      <h2>{state.counter}</h2>
      <button onClick={incrementHandler}>Increment</button>
    </>
  );
};

export default App;
