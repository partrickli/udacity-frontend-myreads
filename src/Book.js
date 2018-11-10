import React from 'react';
import './Book.css';

function Book(props) {
  const book = props.book;
  return (
    <div className="Book">
      <img src={book.imageLinks.thumbnail} alt={book.title} />
      <h2>{props.book.title}</h2>
      {book.authors.map((author) => {
        return <p key={author}>{author}</p>;
      })}
    </div>
  );
}

export default Book;
