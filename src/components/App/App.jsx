import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// import components
import Admin from "../Admin/Admin";
import Header from "../Header/Header";
import Comments from "../Pages/Comments/Comments";
import Feeling from "../Pages/Feeling/Feeling";
import Support from "../Pages/Support/Support";
import Understanding from "../Pages/Understanding/Understanding";
import Submit from "../Pages/Submit/Submit";
import ThankYou from "../Pages/ThankYou/ThankYou";

function App() {
  // useDispatch 
  const dispatch = useDispatch();

  // GET feedbacks data from server 
  const fetchFeedbacks = () => {
    axios
      .get("/feedbacks")
      .then((response) => {
        // dispatch data to store to update the state
        dispatch({ type: "FEEDBACKS", payload: response.data });
      })
      .catch((err) => {
        console.log("Error in GET req", error);
      });
  };
 

 // fetchFeedbacks run once 
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Feeling />
          </Route>
          <Route exact path="/understanding">
            <Understanding />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
          <Route exact path="/comments">
            <Comments />
          </Route>
          <Route exact path="/review">
            <Submit fetchFeedbacks={fetchFeedbacks} />
          </Route>
          <Route exact path="/thankyou">
            <ThankYou />
          </Route>
          <Route exact path="/admin">
            <Admin fetchFeedbacks={fetchFeedbacks} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
