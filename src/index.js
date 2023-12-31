import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { searchRobots, fetchRobots } from "./reducers";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceworker from "./serviceWorkerRegistration";
import App from "./App";

const logger = createLogger();

const rootReducer = combineReducers({
  searchRobots,
  fetchRobots,
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceworker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
