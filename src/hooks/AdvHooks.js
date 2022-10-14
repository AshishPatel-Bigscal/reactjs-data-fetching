import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "factorial":
      let fact = 1;
      while (state > 0) {
        fact *= state;
        state -=1;
      }
      return fact;
    case "reset":
      return state=0;
    default:
      throw new Error();
  }
}
const AdvHooks = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  function findFatorial() {
    dispatch({ type: "factorial" });
  }

  return (
    <>
      Count : {state}
      <button onClick={() => dispatch({ type: "dec" })}> Remove </button>
      <button onClick={() => dispatch({ type: "inc" })}> Add </button> <br />
      <button onClick={findFatorial}> Find Factorial </button>
      <button onClick={()=> dispatch({type: 'reset'})}> Reset </button>
    </>
  );
};

export default AdvHooks;
