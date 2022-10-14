import axios from "axios";
export function increment() {
  return {
    type: "INCREMENT",
  };
}

export function decrement() {
  return {
    type: "DECREMENT",
  };
}

export function sendRequestSuccess(data) {
  return {
    type: "SUCCESS",
    payload: data,
  };
}
export function sendRequestError(err) {
  return {
    type: "ERROR",
    payload : err,
  };
}

// export async function loadPost() {

//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   // console.log("dtaaaa ",response.data);
//   return {
//     type: "LOADPOST",
//     payload: response.data,
//   };
// }

// export function loadPost() {
//   return (dispatch) => {
//     // dispatch(sendRequest());
//     try {
//       (async () =>
//         await axios
//           .get("https://jsonplaceholder.typicode.com/posts/")
//           .then((response) => {
//             dispatch(sendRequestSuccess(response.data));
//           })
//           .catch((err) => {
//             dispatch(sendRequestError(err));
//           }))();
//     } catch (error) {
//       dispatch(sendRequestError(error));
//     }
//   };
// }

export function loadPost() {
  return (dispatch) => {
    try {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        // .then((response) => dispatch({ type: "LOADPOST", payload: response.data }))
        .then((response) => dispatch(sendRequestSuccess(response.data)))
        .catch((err) => dispatch(sendRequestError(err)))
    } catch (err) {
      dispatch(sendRequestError(err));
    }
  };
}