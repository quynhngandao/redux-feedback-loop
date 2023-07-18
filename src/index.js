import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// SWITCH STATEMENT
// saved feedbacks to send to database
const feedbacks = (state = {}, action) => {
  switch (action.type) {
    // feeling
    case "FEELING":
      return { ...state, feeling: action.payload };
      break;
    // understanding
    case "UNDERSTANDING":
      return { ...state, understanding: action.payload };
      break;
    // support
    case "SUPPORT":
      return { ...state, support: action.payload };
      break;
    // comments
    case "COMMENTS":
      return { ...state, comments: action.payload };
      break;
    // clear feedbacks when "leave new feedback" is clicked
    case "CLEAR":
      return {};
      break;
    // else statement
    default:
      return state;
      break;
  }
};

// Store the 4 saved responses for reviewing before submitting
const feedbacksReview = (state = [], action) => {
  if (action.type === "FEEDBACKS") {
    return action.payload;
  }
  return state;
};

// store
const store = createStore(
  combineReducers({
    feedbacks,
    feedbacksReview,
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
