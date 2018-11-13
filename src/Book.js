import React from 'react';
import './Book.css';

function Book(props) {
  const book = props.book;
  return (
    <div className="Book">
      <img src={book.imageLinks.thumbnail} alt={book.title} />
      <h2>{book.title}</h2>
      {/* {book.authors.map((author) => {
        return <p key={author}>{author}</p>;
      })} */}
      <label>Move to:</label>
      <select
        value={book.shelf}
        onChange={(event) => {
          props.changeShelf(book.title, event.target.value);
        }}
      >
        <option value="read">Read</option>
        <option value="wantToRead">Want To Read</option>
        <option value="currentlyReading">Currently Reading</option>
      </select>
    </div>
  );
}

export default Book;
