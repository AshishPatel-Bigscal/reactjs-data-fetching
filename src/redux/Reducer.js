const initialState = {
  number: 0,
};

const initialData = {
  data: {},
  loading: false,
  error: "",
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        number: state.number + 1,
      };
    case "DECREMENT":
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export function dataReducer(state = initialData, action) {
  switch (action.type) {
    case "LOADPOST":
      return {
        data: action.payload,
      };
    case "SUCCESS":
      return {
        data: action.payload,
      };
    case "REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default counterReducer;
