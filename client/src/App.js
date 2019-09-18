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
    loggedIn: false
  }

  changeLoggedIn = () => {
    this.setState({ loggedIn: true });
    console.log(this.state.loggedIn)
  };

  logout = () => {
    this.setState({ loggedIn: false });
    console.log(this.state.loggedIn)
  };

  render() {
    return (
      <div className="container">
        <Router>
          {this.state.loggedIn ? <Navbar /> : ""}
          <div className="jumbotron"><h1>Put catchy name here</h1></div>

          <Switch >
            {!this.state.loggedIn ?
              <div>
                <Route exact path="/" render={(props) =>
                  <Login changeLoggedIn={this.changeLoggedIn} />} />
                <Route exact path="/create" component={Login} />
                <Route exact path="/dashboard" component={Login} />
                <Route exact path="/expenseEntry" component={Login} />
                <Route exact path="/subscriptions" component={Login} />
              </div> :
              <div>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/create" component={CreateAccount} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/expenseEntry" component={ExpenseEntry} />
                <Route exact path="/subscriptions" component={Subscriptions} />
              </div>}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
