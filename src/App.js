import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { HomeLayout } from './components/layouts/home-layout/home-layout';
import { JogLayout } from './components/layouts/jog-layout/jog-layout';
import { InfoLayout } from './components/layouts/info-layout/info-layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeLayout}/>
        <Route exact path='/jog' component={JogLayout}/>
        <Route exact path='/info' component={InfoLayout}/>
      </Switch>
    </Router>
  );
}

export default App;
