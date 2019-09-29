import React, {Component} from 'react';
import Wrapper from '../SubCards/Wrapper';
import API from '../../utilities/API'
import './style.css'
import SearchBar from "../SearchBar/SearchBar"

class CreateSub extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: props.username,
          name: "",
          date: "",
          amount: "",
          subURL: "",
        }
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
          date: this.state.date,
          username: this.state.username
        })
          .then(res => this.loadSubs())
          .catch(err => console.log(err));
      }
    
    render() {
        return (
            <div className="container">
                <Wrapper>
                    <div>
                        <div className="search-bar">
                            <SearchBar onChange={this.handleInputChange}/>
                        </div>
                        <div className="line1">
                            <p>Subscription URL: </p><input type="text" size="50" name="subURL"
                                placeholder="Paste URL here" onChange={this.handleInputChange} value={this.state.subURL} />
                        </div>
                        <div className="line1">
                            <p>Renewal Date:</p>
                            <input type="date" size="50" name="date" onChange={this.handleInputChange} value={this.state.date} />
                        </div>
                        <div className="line1">
                            <p>Amount:</p>
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                                <input type="number" name="amount" onChange={this.handleInputChange} value={this.state.amount}></input>
                                <div className="line2">
                                    <select name="">
                                        <option value="monthly">Monthly</option>
                                        <option value="annualy">Annualy</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="submit" onClick={this.handleSubscriptionEntry} />
                    </div>
                </Wrapper>
            </div >
        )
    }
}

export default CreateSub;

