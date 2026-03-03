import "./App.css";
import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/appStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
