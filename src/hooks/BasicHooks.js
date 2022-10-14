import React, { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext();

const BasicHooks = () => {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(0);

  useEffect(() => {
    document.title = count;
    setMultiply(count * 2);
  }, [count]);

  return (
    <>
      <UserContext.Provider value={count}>
        Count : {count} <br />
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Remove
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Add
        </button>
        <br />
        Multiplication : {multiply}
        <br />
        <button onClick={() => setCount(0)}>Reset</button>
        <Component1 />
      </UserContext.Provider>
    </>
  );
};

export default BasicHooks;

function Component1() {
    const count = useContext(UserContext);
  return (
    <div>
      <h2> getting value by useContext</h2>
      <h3> Value of Count is : {count} </h3>
    </div>
  );
}
