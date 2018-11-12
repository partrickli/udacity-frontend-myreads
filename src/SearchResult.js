import React from 'react';
import Book from './Book';

function SearchResult(props) {
  console.log('inside SearchResult');
  console.log(props.books);
  props.books.forEach((book) => {
    console.log(book.authors);
  });
  return (
    <div className="Shelf">
      {props.books.map((book) => {
        console.log(book);
        return (
          <Book book={book} key={book.id} changeShelf={props.changeShelf} />
        );
      })}
    </div>
  );
}

export default SearchResult;
