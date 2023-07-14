import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// admin 
const feedback = (state = [], action) => {
    if (action.type === "SAVE_FEEDBACK") {
        return action.payload;
    }
}

// feeling
const feeling = (state = [], action) => {
  if (action.type === "SAVE_FEELING") {
    return action.payload;
  }
  return state;
};

// comprehension 
const comprehension = (state = [], action) => {
    if (action.type === "SAVE_COMPREHENSION") {
      return action.payload;
    }
    return state;
  };

  // support 
const support = (state = [], action) => {
    if (action.type === "SAVE_SUPPORT") {
      return action.payload;
    }
    return state;
  };

    // comments 
const comment = (state = [], action) => {
    if (action.type === "SAVE_COMMENT") {
      return action.payload;
    }
    return state;
  };

// store
const store = createStore(
  combineReducers({
    feeling,
    comprehension,
    support,
    comment,
    feedback
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
