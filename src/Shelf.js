import React from 'react';
import './Shelf.css';
import Book from './Book';

function Shelf(props) {
  return (
    <div className="Shelf">
      {props.list.map((book) => {
        return <Book title={book} key={book} />;
      })}
    </div>
  );
}

export default Shelf;
