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

  changeShelf(title, shelf) {
    const index = this.state.books.findIndex((book) => book.title === title);
    let books = this.state.books.slice();
    books[index].shelf = shelf;
    this.setState({ books: books });

    update(books[index], shelf).then((v) => console.log(v));
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
            <Route path="/search" component={Search} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
