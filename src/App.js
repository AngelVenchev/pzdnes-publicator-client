import React from 'react';
import logo from './logo.svg';
import './App.css';
import PublicatorService from './Services/PublicatorService.js';
import Input from './Components/Input.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailSenderFilter: '',
      emailUsername: '',
      emailPassword: '',
      wordpressUsername: '',
      wordpressPassword: '',
      articles: [
        // {content: 'Двама нелегални дървосекачи управляващи автомобили с чужди табели са задържани в ареста на РУ-Септември. Това е станало след сигнал на служители от Държавното горско стопанство в Пазарджик.  През уикенда в землището на септемврийското село Семчиново лесничеите патрулирали,   когато засекли два леки автомобила по пътя към параклиса „Свети Илия“. Виждайки горските стражари двамата водачи изоставили возилата и избягали. На мястото били повикани екипи от полицейското управление в Септември. Оказало се, че возилата „Лада“ и „Опел“ са оборудвани с чужди регистрационни табели. В багажниците им са открити около 1.5 кубически метра незаконно добита широколистна дървесина. Криминалистите от полицейското управление започнали работа по случая и не след дълго установили и задържали бегълците. Оказало се, че това са семчиновците К.А.-26г. и Г.Б.-18г. Спрямо тях е образувано досъдебно производство.'}
      ]
    }
  }

  loadEmailData = () => {
    var {articles, ...model} = this.state;
    PublicatorService.GetNews(model)
      .then(httpResponse => {
        if(httpResponse.ok) {
          console.log('success');
          httpResponse.json().then(response => {
            debugger;
            this.setState({articles: response.articles});
            console.log(response);
          })
        } else {
          console.error("fail");
        }
      });
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

  renderArticles() {
    return this.state.articles.map(article => {
      return <div className="Article">
        <p>{article.content}</p>
      </div>
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <div className="Form">
            <Input name="emailSenderFilter" title="Email Sender" value={this.state.emailSenderFilter} onChange={this.handleChange} />
            <Input name="emailUsername" title="Email Username" value={this.state.emailUsername} onChange={this.handleChange}/>
            <Input name="emailPassword" title="Email Password" value={this.state.emailPassword} onChange={this.handleChange} type="password"/>
            <Input name="wordpressUsername" title="Wordpress Username" value={this.state.wordpressUsername} onChange={this.handleChange}/>
            <Input name="wordpressPassword" title="Wordpress Password" value={this.state.wordpressPassword} onChange={this.handleChange} type="password"/>
            <div>
              <button onClick={this.saveCredentials}>Save Credentials</button>
            </div>
            <div>
              <button onClick={this.loadCredentials}>Load Credentials</button>
            </div>
            <div>
              <button onClick={this.loadEmailData}>Load Email Data</button>
            </div>
          </div>
        </section>
        <section className="Articles">
          {this.renderArticles()}
        </section>
      </div>
    );
  }
}

export default App;
