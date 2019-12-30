import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/Shop';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={Shop} /> 
      </Switch>
    </div>
  );
}

export default App;
