import React, { Component } from 'react';
import Book from './Book';
import { search } from './BooksAPI';
import SearchResult from './SearchResult';

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
        <SearchResult books={this.state.searchedBooks} />
      </div>
    );
  }
}

export default Search;
