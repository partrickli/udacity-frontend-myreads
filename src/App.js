import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { getAll, update } from './BooksAPI';
import Search from './Search';
import ReadList from './ReadList';

const shelfTags = ['read', 'currentlyReading', 'wantToRead'];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.changeShelf = this.changeShelf.bind(this);
  }

  changeShelf(bookToChange, shelf) {
    let books = this.state.books.slice();
    const index = books.findIndex((book) => {
      return book.title === bookToChange.title;
    });

    if (index === -1) {
      // Add to list, if book not exist on state
      books.concat(bookToChange);
      update(bookToChange, shelf).then((v) => console.log(v));
    } else {
      //Change shelf
      books[index].shelf = shelf;
      update(books[index], shelf).then((v) => console.log(v));
    }

    this.setState({ books: books });
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
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>My Reads</h1>
            <Link to="/search">Search</Link>
          </header>
          <main>
            <Route
              path="/"
              exact
              component={() => (
                <ReadList shelves={shelves} changeShelf={this.changeShelf} />
              )}
            />
            <Route
              path="/search"
              component={() => <Search changeShelf={this.changeShelf} />}
            />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
