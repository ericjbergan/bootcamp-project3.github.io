import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../src/components/Navbar/Navbar'
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
    loggedIn: false,
    date: "",
    amount: "",
    category: "",
    store: "",
    tableData: {
      groceries: "87.50",
      gas: "53.15",
      eatingOut: "56.00",
      misc: "135.00",
      subscriptions: "217.00"
    },
    subscriptions: [
      {
        name: "Netflix",
        cost: "12.00 " + this.renews,
        renews: "monthly",
        date: "10/15/19"
      },
      {
        name: ""
      }
    ]
  }

  handleInputChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleExpenseEntry = () => {
    console.log("handleExpenseEntry")
    // build json from 'this.state' expense data and run app.create for expenses
  }

  handleSubscriptionEntry = () => {
    console.log("handleSubscriptionEntry")
    // build json from 'this.state' subscription data and run app.create for subscriptions
  }

  changeLoggedIn = () => {
    this.setState({ loggedIn: true });
    console.log("logged in");
  };

  logout = () => {
    this.setState({ loggedIn: false });
    console.log("logged out");
  };

  render() {
    return (
      <div className="container">
        <Router>
          {this.state.loggedIn ? <Navbar logout={this.logout} /> : ""}
          <div className="jumbotron">
            <h1>Put catchy name here</h1>
          </div>

          <Switch >
            {!this.state.loggedIn ?
              <div>
                <Route exact path="/" render={(props) =>
                  <Login
                    changeLoggedIn={this.changeLoggedIn}
                    username={this.state.username}
                    password={this.state.password}
                    onChange={this.handleInputChange}
                  />} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/create" component={CreateAccount} />
                <Route exact path="/dashboard" component={Login} />
                <Route exact path="/expenseEntry" component={Login} />
                <Route exact path="/subscriptions" component={Login} />
              </div> :
              <div>
                <Route exact path="/" render={(props) =>
                  <Dashboard
                    date={this.state.date}
                    amount={this.state.amount}
                    category={this.state.category}
                    store={this.state.store}
                    tableData={this.state.tableData}
                    subscriptions={this.state.subscriptions}
                    onChange={this.handleInputChange}
                    onClick={this.handleExpenseEntry}
                  />} />

                <Route exact path="/create" component={CreateAccount} />
                <Route exact path="/dashboard" render={(props) =>
                  <Dashboard
                    date={this.state.date}
                    amount={this.state.amount}
                    category={this.state.category}
                    store={this.state.store}
                    tableData={this.state.tableData}
                    subscriptions={this.state.subscriptions}
                    onChange={this.handleInputChange}
                    onClick={this.handleExpenseEntry}
                  />} />
                <Route exact path="/expenseEntry" render={(props) =>
                  <ExpenseEntry
                    date={this.state.date}
                    amount={this.state.amount}
                    category={this.state.category}
                    store={this.state.store}
                    onChange={this.handleInputChange}
                    onClick={this.handleExpenseEntry}
                  />} />
                <Route exact path="/subscriptions" render={(props) =>
                  <Subscriptions
                    category={this.state.category}
                    subscriptions={this.state.subscriptions}
                    onChange={this.handleInputChange}
                    onClick={this.handleSubscriptionEntry}
                  />} />
              </div>}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
