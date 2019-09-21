import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'

import Navbar from '../src/components/Navbar/Navbar-passport'
import CreateAccount from './components/CreateAccount/CreateAccount'
import Signup from './components/CreateAccount/Sigup-passport';
import LoginForm from './components/Login/Login-passport'
import Dashboard from './components/Dashboard/Dashboard'
import ExpenseEntry from './components/ExpenseEntry/ExpenseEntry'
import Subscriptions from './components/Subscriptions/Subscriptions'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: null,
      password: "",
      loggedIn: true,
      date: "",
      amount: "",
      category: "groceries",
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
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }


  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
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
    // this.setState({ loggedIn: true });
    // console.log("logged in");
  };

  logout = () => {
    this.setState({ loggedIn: false });
    console.log("logged out");
  };

  render() {
    return (
      <div className="container">
        <Router>
          
          <div className="jumbotron">
            <h1>Put catchy name here</h1>
          </div>
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {this.state.loggedIn &&
            <p>Hello, {this.state.username}!</p>
          }

          {!this.state.loggedIn ?
            <div>

              <Switch >

                <Route
                  path="/signup"
                  render={() =>
                    <Signup />}
                />
                <Route //catchall
                  render={() =>
                    <LoginForm
                      updateUser={this.updateUser}
                    />}
                />
              </Switch>

            </div> :
            <div>
              <Switch >
                <Route exact path="/" component={Dashboard} />

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
          </Switch>

              </div>}
        </Router>
      </div>
    );
  }
}

export default App;
