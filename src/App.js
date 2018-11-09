import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';

class App extends Component {
  books = [
    ['Harry Potter', 'Three Body', 'AI'],
    ['Lean StartUp', 'Zero to One'],
    ['红楼梦', '西游记'],
  ];
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Reads</h1>
          {this.books.map((list) => {
            return <BookList list={list} />;
          })}
        </header>
      </div>
    );
  }
}

export default App;
