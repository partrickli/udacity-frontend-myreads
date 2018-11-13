import React, { Component } from 'react';
import './Search.css';
import { search } from './BooksAPI';
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
            let searchKeyword = event.target.value;
            console.log(`search for: ${searchKeyword}`);
            search(searchKeyword).then((books) => {
              console.log(books);
              if (books && !books.error) {
                this.setState({
                  searchedBooks: books,
                });
              } else {
                this.setState({
                  searchedBooks: [],
                });
              }
            });
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
