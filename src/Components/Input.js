import React from 'react';
import './Input.css';

class App extends React.Component {
  render() {
    return (
      <div className="Input">
        <div>
          <label htmlFor={this.props.name}>{this.props.title}</label>
        </div>
        <div>
          <input
            id={this.props.name}
            name={this.props.name}
            type={this.props.type || "text"}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange} 
          />
        </div>
      </div>
    );
  }
}

export default App;
