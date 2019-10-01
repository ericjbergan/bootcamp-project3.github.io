import React, { Component } from 'react';
import Wrapper from '../SubCards/Wrapper';
import API from '../../utilities/API'
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import Autosuggest from 'react-autosuggest';
import './style.css';
import SearchBar from "../SearchBar/SearchBar";
import App from "../../App";

const subscription = [
    {
        "name": "netflix",
        "renewal date": "",
        "amount": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        "url": "https://www.netflix.com/Login?nextpage=https%3A%2F%2Fwww.netflix.com%2FYourAccount"
    },
    {
        "name": "hulu",
        "renewal date": "",
        "amount": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
        "url": "https://auth.hulu.com/web/login"
    },
    {
        "name": "amazon prime ",
        "renewal date": "",
        "amount": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Amazon_Prime_Logo.svg",
        "url": "https://www.amazon.com/your-account"
    },
    {
        "name": "hbo now",
        "renewal date": "",
        "amount": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/HBONOW-logo.svg",
        "url": "https://play.hbonow.com/page/urn:hbo:page:home"
    },
    {
        "name": "sling tv",
        "renewal date": "",
        "amount": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Sling_TV_logo.svg",
        "url": "https://oauth-client.p.sling.com/?redirect_uri=https://www.sling.com/authentication_callback&client_id=ott_server&state=eqfk0"
    },
    {
        "name": "disney +",
        "renewal date": "",
        "amount": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
        "url": "https://preview.disneyplus.com"
    },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('\\b' + escapedValue, 'i');

    return subscription.filter(person => regex.test(getSuggestionValue(person)));
}

function getSuggestionValue(suggestion) {
    return `${suggestion.name}`;
}

function renderSuggestion(suggestion, { query }) {
    const suggestionText = `${suggestion.name}`;
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);

    return (
        <span className={'suggestion-content ' + suggestion.image}>
            <span className="name">
                {
                    parts.map((part, index) => {
                        const className = part.highlight ? 'highlight' : null;

                        return (
                            <span className={className} key={index}>{part.text}</span>
                        );
                    })
                }
            </span>
        </span>
    );
}

class CreateSub extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            value: "",
            date: "",
            amount: "",
            subURL: "",
            suggestions: []
        }
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
          value: newValue
        });
      };
  
    handleSubscriptionEntry = (event) => {
        // event.preventDefault();
        console.log("handleSubscriptionEntry")
        API.saveSubscription({
            name: this.state.value,
            amount: this.state.amount,
            subURL: this.state.subURL,
            date: this.state.date,
            username: this.state.username
        })
            .then(res => this.loadSubs())
            .catch(err => console.log(err));
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const value = this.state.value
        const suggestions = this.state.suggestions
        const inputProps = {
            placeholder: "Subscription name",
            value,
            onChange: this.onChange
        };

        return (
            <div className="container">
                <Wrapper>
                    <div>
                        <div className="search-bar">
                            <div>
                                <Autosuggest
                                    suggestions={suggestions}
                                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                    getSuggestionValue={getSuggestionValue}
                                    renderSuggestion={renderSuggestion}
                                    inputProps={inputProps} />
                            </div>
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