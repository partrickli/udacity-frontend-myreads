import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Books</h1>
          {['Harry Potter', 'Three Body', 'AI'].map((title) => {
            return <Book title={title} key={title} />;
          })}
        </header>
      </div>
    );
  }
}

export default App;
