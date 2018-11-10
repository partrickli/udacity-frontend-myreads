import React from 'react';
import './Book.css';

function Book(props) {
  return (
    <div className="Book">
      <img src={props.book.imageLinks.thumbnail} />
      <h2>{props.book.title}</h2>
    </div>
  );
}

export default Book;
