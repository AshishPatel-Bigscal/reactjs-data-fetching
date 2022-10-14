import { applyMiddleware, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import RootReducers from "./RootReducers";

const store = createStore(RootReducers,applyMiddleware(thunk))

export default store;