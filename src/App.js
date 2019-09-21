import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main/Main'
import CreateAccount from './components/CreateAccount/CreateAccount'
import Login from './components/Login/Login'
import './App.css';
import Monthly from "./components/MonthlySubscription/Monthly";
import CreateSub from "./components/CreateSub/CreateSub";

class App extends Component {
  state = {
    username: "",
    password: ""
  }
  
  render() {
    return (
      <div className="container">
        <div className="jumbotron"><h1>Put catchy name here</h1></div>
        <Router>
      <div className="container">
        <Switch >
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/create" component={CreateAccount} />
          <Route exact path="/login" component={Login} />
          <Route extct path="/monthly" component={Monthly}/>
          <Route exact path="/addnew" component={CreateSub}/>
        </Switch>
      </div>
    </Router>
      </div>
    );
  }
}

export default App;
