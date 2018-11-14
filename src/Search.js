import React, { Component } from 'react';
import './Search.css';
import { search } from './BooksAPI';
import SearchResult from './SearchResult';
import { NavLink } from 'react-router-dom';
import { intersect } from './util';

/**
 *
 * @param {string[]} keywords
 */
function searchBooks(keywords) {
  if (keywords.length === 1) {
    return search(keywords[0]);
  } else {
    let searchPromises = keywords.map((keyword) => search(keyword));
    return Promise.all(searchPromises).then((bookLists) => {
      let result = bookLists.reduce((previous, current) => {
        return intersect(previous, current, (b1, b2) => b1.id === b2.id);
      }, bookLists[0]);
      return result;
    });
  }
}

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
            let searchKeyword = event.target.value;
            if (searchKeyword.trim() === '') {
              this.setState({ searchedBooks: [] });
            } else {
              let keywords = searchKeyword.split(' ').filter((k) => k !== '');
              searchBooks(keywords).then((books) => {
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
