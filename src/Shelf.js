import React from 'react';
import './Shelf.css';
import Book from './Book';

function Shelf(props) {
  return (
    <div className="Shelf">
      <h2>书架：{props.shelf}</h2>
      {props.books.map((book) => {
        return <Book book={book} key={book.title} />;
      })}
    </div>
  );
}

export default Shelf;
