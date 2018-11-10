import React, { Component } from 'react';
import './App.css';
import { getAll } from './BooksAPI';
import Shelf from './Shelf';

const shelfTags = ['read', 'currentlyReading', 'wantToRead'];
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
    const shelves = shelfTags.map((tag) => {
      const books = this.state.books.filter((book) => book.shelf === tag);
      return {
        catagory: tag,
        books: books,
      };
    });
    console.log(shelves);
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Reads</h1>
        </header>
        <main>
          <div className="shelves">
            {shelves.map((shelf) => {
              return (
                <Shelf
                  key={shelf.catagory}
                  shelf={shelf.catagory}
                  books={shelf.books}
                />
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
