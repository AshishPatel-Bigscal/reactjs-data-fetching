import "./App.css";
import { Provider } from 'react-redux';
import store from "./redux/Store";
import Counter from "./redux/Counter";

// import Api from "./dataFetching/Api";
// import Hooks from "./hooks/Hooks";
// import SignupForm from "./SignupForm";
// import PostsForm from "./PostsForm";
// comment added
function App() {
  return (
    <Provider store={store}>

      {/* <PostsForm /> */}
      {/* <SignupForm /> */}
      {/* <Hooks /> */}
      {/* <Api /> */}
      <Counter />
    </Provider>
  );
}
export default App;