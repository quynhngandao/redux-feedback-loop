import React, { Suspense, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from "react-router-dom" 
import {useDispatch} from "react-redux"

// import components 
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import Comment from '../Comment/Comment';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <Header/>
      
      <Router>
        <ul className='nav'>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Feeling</Link>
          </li>
          <li>
            <Link>Understanding</Link>
          </li>
          <li>
            <Link>Support</Link>
          </li>
          <li>
            <Link>Comment</Link>
          </li>
        </ul>
        <Route exact path="/"><Admin/></Route>
        <Route exact path="/1"><Feeling/></Route>
        <Route exact path="/2"><Understanding/></Route>
        <Route exact path="/3"><Support/></Route>
        <Route exact path="/4"><Comment/></Route>
        <Route exact path="/submit"><Submit/></Route>
      </Router>
    </div>
  );
}

export default App;
