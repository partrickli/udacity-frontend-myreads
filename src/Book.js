import React from 'react';
import './Book.css';

function Book(props) {
  const book = props.book;
  let thumbnail = book.imageLinks ? book.imageLinks.thumbnail : 'thumbnail.jpg';

  return (
    <div className="Book">
      <img src={thumbnail} alt={book.title} />
      <div className="book-detail">
        <h2>{book.title}</h2>

        {Array.isArray(book.authors) &&
          book.authors.map((author) => {
            return <p key={author}>{author}</p>;
          })}
        <label>Move to:</label>
        <select
          value={book.shelf || ''}
          onChange={(event) => {
            console.log('book to change inside Book Component');
            console.log(book);
            props.changeShelf(book, event.target.value);
          }}
        >
          <option value="">none</option>
          <option value="read">Read</option>
          <option value="wantToRead">Want To Read</option>
          <option value="currentlyReading">Currently Reading</option>
        </select>
      </div>
    </div>
  );
}

export default Book;
