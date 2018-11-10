import React, { Component } from 'react';
import './App.css';
import { getAll } from './BooksAPI';
import Shelf from './Shelf';
import Book from './Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    getAll().then((books) => {
      this.setState({
        books: books,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Reads</h1>
          {this.state.books.map((book) => {
            return <Book title={book.title} key={book.title} />;
          })}
        </header>
      </div>
    );
  }
}

export default App;
