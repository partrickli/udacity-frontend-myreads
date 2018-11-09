import React from 'react';
import './Book.css';

function Book(props) {
  return (
    <div className="Book">
      <h2>{props.title}</h2>
    </div>
  );
}

export default Book;
