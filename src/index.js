import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// feedbacks 
const feedbacks = (state = [], action) => {
    if (action.type === "FEEDBACKS") {
        return action.payload;;
    }
    return state;
}

// feeling
const feeling = (state = [], action) => {
  if (action.type === "FEELING") {
    return action.payload;
  }
  return state;
};

// understanding 
const understanding = (state = [], action) => {
    if (action.type === "UNDERSTANDING") {
      return action.payload;
    }
    return state;
  };

  // support 
const support = (state = [], action) => {
    if (action.type === "SUPPORT") {
      return action.payload;
    }
    return state;
  };

    // comments 
const comments = (state = [], action) => {
    if (action.type === "COMMENTS") {
      return action.payload;
    }
    return state;
  };

// store
const store = createStore(
  combineReducers({
    feedbacks,
    feeling,
    understanding,
    support,
    comments
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
