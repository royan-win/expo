import React from 'react';
import './App.css';
import Register from './components/Register';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Admin">
          <Register/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
      <BottomNav/>
    </Router>
  );
}

export default App;
