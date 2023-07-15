import React, { Suspense, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Switch, Route} from "react-router-dom" 
import {useDispatch} from "react-redux"

// import components 
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import Comment from '../Pages/Comment/Comment';
import Feeling from '../Pages/Feeling/Feeling';
import Support from '../Pages/Support/Support';
import Understanding from '../Pages/Understanding/Understanding';
import Submit from '../Pages/Submit/Submit';

function App() {

  return (
    <div className='App'>  
      <Router>
<Header/>

       <Switch>
        <Route exact path="/"><Admin/></Route>
        <Route  path="/feeling"><Feeling/></Route>
        <Route  path="/understanding"><Understanding/></Route>
        <Route  path="/support"><Support/></Route>
        <Route  path="/comment"><Comment/></Route>
        <Route  path="/review"><Submit/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
