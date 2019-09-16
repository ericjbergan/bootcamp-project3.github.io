import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../src/components/Navbar/Navbar'
import Main from './components/Main/Main'
import CreateAccount from './components/CreateAccount/CreateAccount'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import ExpenseEntry from './components/ExpenseEntry/ExpenseEntry'
import Subscriptions from './components/Subscriptions/Subscriptions'
import './App.css';

class App extends Component {
  state = {
    username: "",
    password: "",
  }
  
  render() {
    return (
      <div className="container">
          <Router>
        <Navbar />
        <div className="jumbotron"><h1>Put catchy name here</h1></div>
      <div>
        <Switch >
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/create" component={CreateAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/expenseEntry" component={ExpenseEntry} />
          <Route exact path="/subscriptions" component={Subscriptions} />
        </Switch>
      </div>
    </Router>
      </div>
    );
  }
}

export default App;
