import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const name = 'winser';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, {name}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))