import React from 'react';
import './Shelf.css';
import Book from './Book';

const shelfHeaders = {
  read: 'Read',
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want To Read',
};

function Shelf(props) {
  return (
    <div className="Shelf">
      <div className="shelf-header">
        <h2>{shelfHeaders[props.shelf]}</h2>
      </div>
      <div className="shelf-body">
        {props.books.map((book) => {
          return (
            <Book
              book={book}
              key={book.title}
              changeShelf={props.changeShelf}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shelf;
