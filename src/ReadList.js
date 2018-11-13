import React from 'react';
import './ReadList.css';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';
function BookList(props) {
  return (
    <div className="shelves">
      {props.shelves.map((shelf) => {
        return (
          <Shelf
            key={shelf.catagory}
            shelf={shelf.catagory}
            books={shelf.books}
            changeShelf={props.changeShelf}
          />
        );
      })}
      <button className="add-book">
        <Link to="/search">Add Book</Link>
      </button>
    </div>
  );
}

export default BookList;
