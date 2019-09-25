import React from 'react';
import AutosuggestHighlightMatch from "../../../node_modules/autosuggest-highlight/match";
import AutosuggestHighlightParse from '../../../node_modules/autosuggest-highlight/parse';
import Autosuggest from '../../../node_modules/react-autosuggest';
import './style.css'
const subscription = [
    {
    //   first: 'Charlie',
    //   last: 'Brown',
    //   twitter: 'dancounsell'
    // },
    // {
    //   first: 'Charlotte',
    //   last: 'White',
    //   twitter: 'mtnmissy'
    // },
    // {
    //   first: 'Chloe',
    //   last: 'Jones',
    //   twitter: 'ladylexy'
    // },
    // {
    //   first: 'Cooper',
    //   last: 'King',
    //   twitter: 'steveodom'
    // },
    // {
        // name:"Netflix",
        // last:" ",

         
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
            "url":"https://play.hbonow.com/page/urn:hbo:page:home"
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
  
  class SearchBar extends React.Component {
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: []
      };    
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
    
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
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Type 'c'",
        value,
        onChange: this.onChange
      };
  
      return (
          <div>
          
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
          </div>
      );
    }
  }
  
  export default SearchBar;
  