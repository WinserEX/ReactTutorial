import React, { Component } from 'react'
import Table from "./Table";

const name = 'Winser';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hello, my name is {name} and I'm learning how to use React.
        </h1>
        <h3>
          JSX, important things to keep in mind:
        </h3>
        <p>
          <ul>
            <li>className is used instead of class for adding CSS classes, as class is a reserved keyword in JavaScript.</li>
            <li>Properties and methods in JSX are camelCase - onclick will become onClick.</li>
            <li>Self-closing tags must end in a slash.</li>
            <li>JSX is easier to write and understand than creating and appending many elements in vanilla JavaScript, and is one of the reasons people love React so much.</li>
          </ul>
        </p>
        <h3></h3>
        <Table />
      </div>
    )
  }
}

export default App