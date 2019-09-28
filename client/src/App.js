import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'
import API from './utilities/API'
import NavbarPass from './components/Navbar/Navbar-passport'
import Navbar from './components/Navbar/Navbar'
import CreateAccount from './components/CreateAccount/CreateAccount'
import Signup from './components/CreateAccount/Sigup-passport';
import LoginForm from './components/Login/Login-passport'
import Subscriptions from './components/MonthlySubscription/Subscriptions'
import './App.css';
import CreateSub from "./components/CreateSub/CreateSub";

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: null,
      password: "",
      loggedIn: true,
      name: "",
      date: "",
      amount: "",
      subURL: "",
      subscriptions: []
    }
  }


  componentDidMount = () => {
    this.getUser();
    this.loadSubs();
  }

  updateUser = (userObject) => {
    console.log("loggedIn " + this.state.loggedIn)
    this.setState(userObject)
    console.log("loggedIn " + this.state.loggedIn)
  }

  getUser = () => {
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

  loadSubs = () => {
    API.getSubscriptions()
    .then(res =>
      this.setState({ subscriptions: res.data, name: "", date: "", amount: "", subURL: "" })
    )
    .catch(err => console.log(err));
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubscriptionEntry = (event) => {
    event.preventDefault();
    console.log("handleSubscriptionEntry")
    API.saveSubscription({
      name: this.state.name,
      amount: this.state.amount,
      subURL: this.state.subURL,
      date: this.state.date
    })
      .then(res => this.loadSubs())
      .catch(err => console.log(err));
  }

  render() {
    return (

      <div className="container">

        <Router>

          <div className="jumbotron">
            <h1>Subscription Prescription</h1>
          </div>
          {this.state.loggedIn ?
            <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            :
            <NavbarPass updateUser={this.updateUser} loggedIn={this.state.loggedIn} />}

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
                <Route exact path="/" component={Subscriptions} />
                <Route exact path="/create" component={CreateAccount} />
                <Route exact path="/subscriptions" render={(props) =>
                  <Subscriptions
                    category={this.state.category}
                    subscriptions={this.state.subscriptions}
                    onChange={this.handleInputChange}
                  />} />
                <Route exact path="/addnew" render={(props) =>
                  <CreateSub
                    name={this.state.name}
                    date={this.state.date}
                    amount={this.state.amount}
                    subURl={this.state.subURL}
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