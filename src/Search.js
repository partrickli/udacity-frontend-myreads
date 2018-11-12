import React, { Component } from 'react';
import Book from './Book';
import { search } from './BooksAPI';

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
              this.setState({
                searchedBooks: books,
              });
            });
          }}
        />
        {this.state.searchedBooks.map((book) => {
          return <Book book={book} key={book.title} />;
        })}
      </div>
    );
  }
}

export default Search;
