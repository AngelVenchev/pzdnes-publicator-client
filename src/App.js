import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailSenderFilter: '',
      emailUsername: '',
      emailPassword: '',
      wordpressUsername: '',
      wordpressPassword: '',
    }
  }

  loadEmailData = () => {

  }

  handleChange = (e) => {
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change, () => console.log(this.state));
  }

  saveCredentials = () => {
    var state = JSON.stringify(this.state);
    localStorage.setItem('credentials', state);
  }

  loadCredentials = () => {
    var stringCreds = localStorage.getItem('credentials');
    if(stringCreds) {
      var state = JSON.parse(stringCreds);
      this.setState(state);
    } else {
      alert('No credentials found');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <div className="Form">
            <div>
              <input
                name="emailSenderFilter"
                type="text" value={this.state.emailSenderFilter}
                placeholder="ivan@petrov.com"
                onChange={this.handleChange} 
              />
            </div>
            <div>
              <input
              name="emailUsername" 
              type="text" 
              value={this.state.emailUsername} 
              placeholder="ivan@abv.bg" 
              onChange={this.handleChange}
            />
            </div>
            <div>
              <input
              name="emailPassword" 
              type="text" 
              value={this.state.emailPassword} 
              placeholder="securePa$$" 
              onChange={this.handleChange}
            />
            </div>
            <div>
              <input
              name="wordpressUsername" 
              type="text" 
              value={this.state.wordpressUsername} 
              placeholder="vankata" 
              onChange={this.handleChange}
            />
            </div>
            <div>
              <input
              name="wordpressPassword" 
              type="text" 
              value={this.state.wordpressPassword} 
              placeholder="4notherSecurePa$$" 
              onChange={this.handleChange}
            />
            </div>
            <div>
              <button onClick={this.saveCredentials}>Save Credentials</button>
              <button onClick={this.loadCredentials}>Load Credentials</button>
              <button onClick={this.loadEmailData}>Load Email Data</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
