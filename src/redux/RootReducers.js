import counterReducer , {dataReducer} from "./Reducer";

import { combineReducers } from "redux";

const RootReducers = combineReducers({
  counterReducer,
  dataReducer
});

export default RootReducers;
