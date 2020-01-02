import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Shop from './pages/shop/Shop';
import HomePage from './pages/homepage/Homepage.component';
import Header from './component/header/Header'
import SignInUp from './pages/SignInUp/SignInUp';



function App() {
  return (
    <div className="App">
       <Header /> 
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={Shop} /> 
        <Route path='/signin' component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
