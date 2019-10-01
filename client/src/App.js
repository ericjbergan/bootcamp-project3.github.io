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
import Particles from 'react-particles-js';


const particleOpt ={
  particles: {
  number: {
    value: 150,
    density: {
      enable: true,
      value_area: 800,
    }
  }
}
}
class App extends Component {

  constructor() {
    super();
    this.state = {
      username: null,
      password: "",
      loggedIn: false,
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

  render() {
    return (

      <div className="main-page">

        <Router>
        <h2>Welcome to Subscription&nbsp;<i class="fad fa-prescription"></i></h2>
  
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
                    subscriptions={this.state.subscriptions}
                  />} />
                <Route exact path="/addnew" render={(props) =>
                  <CreateSub
                    username={this.state.username}
                  />} />
              </Switch>
              <Particles 
              params={particleOpt}/>
            </div>}
        </Router>

      </div>
    );
  }
}

export default App;
