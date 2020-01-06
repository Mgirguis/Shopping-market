import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Shop from "./pages/shop/Shop";
import HomePage from "./pages/homepage/Homepage.component";
import Header from "./component/header/Header";
import SignInUp from "./pages/SignInUp/SignInUp";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

unSubscribeFromAuth = null;
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.unSubscribeFromAuth = this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
