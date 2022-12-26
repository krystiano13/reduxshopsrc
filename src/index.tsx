import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./store/store";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
