import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// SWITCH STATEMENT
const feedbacks = (state = [], action) => {
  switch (action.type) {
    case "FEELING":
      return { ...state, feeling: action.payload };
      break;
    case "UNDERSTANDING":
      return { ...state, understanding: action.payload };
      break;
    case "SUPPORT":
      return { ...state, support: action.payload };
      break;
    case "COMMENTS":
      return { ...state, comments: action.payload };
      break;
    case "CLEAR":
      return {};
      break;
    case "DELETE":
      return state.filter((feedback) => feedback.id !== action.payload);
      break;
    case "FEEDBACKS":
      return action.payload;
      break;
    default:
      return state;
  }
};

// store
const store = createStore(
  combineReducers({
    feedbacks,
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
