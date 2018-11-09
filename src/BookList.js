import React from 'react';
import './BookList.css';
import Book from './Book';

function BookList(props) {
  return (
    <div className="BookList">
      {props.list.map((book) => {
        return <Book title={book} />;
      })}
    </div>
  );
}

export default BookList;
