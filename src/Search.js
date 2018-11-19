import React, { Component } from 'react';
import './Search.css';
import { search, getBooksByIds } from './BooksAPI';
import SearchResult from './SearchResult';
import { NavLink } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedBooks: [],
    };
  }
  render() {
    return (
      <div className="search">
        <input
          placeholder="search query"
          className="search-box"
          onChange={(event) => {
            let searchKeyword = event.target.value.trim();
            if (searchKeyword === '') {
              this.setState({ searchedBooks: [] });
            } else {
              search(searchKeyword)
                .then((books) => {
                  return books.map((book) => book.id);
                })
                .then((bookIds) => getBooksByIds(bookIds))
                .then((books) => {
                  this.setState({ searchedBooks: books });
                });
            }
          }}
        />
        <div>
          <NavLink className="nav-home" to="/">
            Home
          </NavLink>
        </div>
        <SearchResult
          books={this.state.searchedBooks}
          changeShelf={this.props.changeShelf}
        />
      </div>
    );
  }
}

export default Search;
