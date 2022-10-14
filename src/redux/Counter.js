import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, loadPost } from "./Actions";

const Counter = () => {
  const number = useSelector((state) => state.counterReducer.number);
  const userData = useSelector((state) => state.dataReducer.data);
  const err = useSelector((state) => state.dataReducer.error);
  const dispatch = useDispatch();

  return (
    <>
      <h1> React Redux</h1>
      <h3> Counter</h3>
      <button onClick={() => dispatch(increment())}>Add</button>
      <span>{number}</span>
      <button onClick={() => dispatch(decrement())}>Remove</button>
      <br />
      <div>
        <button onClick={() => dispatch(loadPost())}>Load Data</button>
      </div>

      {err !== "" ? (
        <div>
          <h3>ID :{userData[0].id}</h3>
          <h4>Title :{userData[0].title}</h4>

          {/* {userData.map((itm, id) => {
            return (
              <ul key={id}>
                <h3>ID :{itm.id}</h3>
                <h4>Title :{itm.title}</h4>
              </ul>
            );
          })} */}
        </div>
      ) : (
        <div> {err?.message}</div>
      )}
    </>
  );
};

export default Counter;